import nextConnect from 'next-connect'
import { post } from '../../src/controllers/products'

const route = nextConnect() 

route.post(post)

export default route

// Desativando Body Parser para rota acima. para q dados vao e vem em files par uploads.
export const config = {
    api: {
        bodyParser: false,
    }
}