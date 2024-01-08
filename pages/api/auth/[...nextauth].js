import axios from 'axios'
import NextAuth from "next-auth"
import Providers from 'next-auth/providers'
//import CredentialsProvider from "next-auth/providers/credentials"   --  Version 4.

export default NextAuth({
    // Provedores de Acesso de Login - Facebook_Github...etc.
    providers: [

        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        Providers.Credentials({
            name: "Credentials",

            async authorize(credentials) {
                
                const res = await axios.post(`${process.env.APP_URL}/api/auth/signin`, credentials)
                // Busca dados do Usuario.
                const user = res.data

                // Verificacao
                if (user) {
                    return user
                } else {
                    throw '/auth/signin?i=1'
                }

            }
        }),
        //CredentialsProvider({}),  -- Version 4.

        // GoogleProvider({
        //   clientId: process.env.GOOGLE_CLIENT_ID,
        //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // })
    ],

    // Json Web token
    session: {
        jwt: true,
    },
    // Fator de Seguranca
    jwt: {
        secret: process.env.JWT_TOKEN
    },

        // Assim que fazer Login, o Callback sera executado. 
    callbacks: {
        async jwt (token, user) {
            if (user) {
                token.uid = user.id
            }
            return Promise.resolve(token)
        },

        async session(session, user) {
            session.userId = user.uid
            return session
        }
    },

  database: process.env.MONGODB_URI,
})

