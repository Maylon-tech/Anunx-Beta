// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../src/utils/dbConnect'
import UsersModel from '../../src/models/users'
import { crypto } from '../../src/utils/password'

const users = async (req, res) => {
  const  { method } = req

  switch(method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({ success: true })
      break

      case 'POST':
        // Pegar os dados que vem do req
        // connectar no banco
        // Criptografar Senha
        // Salvar os Dados
        // Responder sucesso

        const {
          name,
          email,
          password,
        } = req.body

        await dbConnect()

        const passwordCrypto = await crypto(password)

        const user =  new UsersModel({
          name,
          email,
          password: passwordCrypto,
        })

        user.save()

        res.status(201).json({ success: true })
  }

}


export default users