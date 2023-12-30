import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O campo "nome" e obrigatoio'],
    },
    email: {
        type: String,
        required: [true, 'O campo "e-mail" e obrigatoio'],
    },
    password: {
        type: String,
        required: [true, 'O campo "senha" e obrigatoio'],
    },
})

export default mongoose.models.users || mongoose.model('users', schema)