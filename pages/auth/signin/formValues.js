import * as yup from 'yup'

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Digite um e-mail valido.')
        .required("Campo obrigatorio!"),

    password: yup.string()
        .min(6, 'Minimo de 6 catacteres.')
        .required("Campo obrigatorio.!"),
})

export {
    initialValues,
    validationSchema,
}