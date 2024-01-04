import UsersModel from '../../models/users'
import dbConnect from '../../utils/dbConnect'
import { compare } from '../../utils/password'

const post = async (req, res) => {
    const {
        email,
        password,
    } = req.body

    await dbConnect()

    const user = await UsersModel.findOne({ email })  // Procura pelo Email.

    // Caso user digitou email ERRADO!
    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid ' })  // Usuario nao exite
    }

    const passIsCorrect = compare(password, user.password)  // Compara os Password para fazer Login. 

    if (passIsCorrect) {
        return res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }

    return res.status(401).json({ success: false, message: 'Invalid' })
}

export {
    post,
}