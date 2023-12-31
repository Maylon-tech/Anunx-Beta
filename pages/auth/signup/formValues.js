import * as yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
}


const validationSchema = yup.object().shape({
    name: yup.string()
        .required("Campo obrigatorio.!"),

    email: yup.string()
        .email('Digite um e-mail valido.')
        .required("Campo obrigatorio!"),

    password: yup.string()
        .min(6, 'Minimo de 6 catacteres.')
        .required("Campo obrigatorio.!"),

    passwordConf: yup.string()
        .required("Campo obrigatorio.!")
        .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais.')  
})


export {
    initialValues,
    validationSchema,
}