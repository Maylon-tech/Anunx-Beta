import NextAuth from "next-auth"
//import Providers from 'next-auth/providers'
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios'

export default NextAuth({

    providers: [
        //Providers.Credentials({})
        CredentialsProvider({
            name: "Credentials",

            async authorize(credentials) {
                
                const res = await axios.post('/api/auth/signin', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type': 'application/json' }
                })

                const user = res.data

                if (user) {
                    return user
                } else {
                    return null
                }

            }
        }),


        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    session: {
        jwt: true,
    },

    jwt: {
        secret: process.env.JWT_TOKEN
    },

  database: process.env.MONGODB_URI,
})

