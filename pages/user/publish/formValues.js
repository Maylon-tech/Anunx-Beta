import * as yup from 'yup'

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    email: '',
    name: '',
    phone: '',
    files: [],
}

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(6, 'Escreva um titulo maior.!')
        .max(20, "Titulo muito grande.!")
        .required("Campo obrigatorio.!"),

    category: yup.string().required("Campo obrigatorio!"),

    description: yup.string()
        .min(25, 'Escreva uma descrição maior.!')
        .required("Campo obrigatorio.!"),

    price: yup.number().required("Campo obrigatorio!"),
    email: yup.string().required("Digite um email valido!"),
    name: yup.string().required("Campo obrigatorio!"),
    phone: yup.number().required("Campo obrigatorio!"),
    files: yup.array().min(1, 'envie pelo menos uma imagem').required("Campo obrigatorio!")
})


export {
    initialValues,
    validationSchema
}