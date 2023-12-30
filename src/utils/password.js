import bcrypt from 'bcrypt'

// Functio para Criptografar senha

const crypto = async pwd => {
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)

    return password
}

// Functin para Descriptografar senha


export {
    crypto,
}