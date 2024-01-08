// precisa do Modelo de DB
import ProductsModel from '../models/products'
import dbConnect from '../utils/dbConnect'
import formidable from 'formidable-serverless'
import path from 'path'
import fs from 'fs'

console.log(Date.now())

const post = async (req, res) => {
    await dbConnect()

    const form = new formidable.IncomingForm({
        multiples: true,
        uploadDir: 'public/uploads',
        keepExtensions: true,
    })

    form.parse(req, async (error, fields, data) => {
        console.log('Chegou no form Parser.')

        if(error) {
            return res.status(500).json({ success: true })
        }
        
        const { files } = data

        const filesToRename = files instanceof Array  
            ? files 
            : [files]

        const filesToSave = []   // array de objetos.

        filesToRename.forEach(file => {
            const timestamp = Date.now()
            const random = Math.floor(Math.random() * 999999) + 1
            const extension = path.extname(file.name)

            const filename = `${timestamp}_${random}${extension}`

            const oldpath = path.join(__dirname, `../../../../${file.path}`)
            const newpath = path.join(__dirname, `../../../../${form.uploadDir}/${filename}`)

            filesToSave.push({
                name: filename,
                path: newpath,
            })

            console.log(oldpath)
            console.log(newpath)

            fs.rename(oldpath, newpath, (error) => {
                if(error) {
                    console.log(error)
                    return res.status(500).json({ success: true })
                }
            })
        })

        // Recebendo dados do Formulario.

        const {
            title,
            category,
            description,
            price,
            name,
            email,
            phone,
            userId,
            image,
        } = fields
        
        const product = new ProductsModel({
            title,
            category,
            description,
            price,
            user: {
                id: userId,
                name,
                email,
                phone,
                image,
            },
            files: filesToSave,
        })
        const register = await product.save()
        if(register) {
            res.status(201).json({ success: true })
        } else {
            res.status(500).json({ success: false })
        }
        
    })
}


export {
    post,
}