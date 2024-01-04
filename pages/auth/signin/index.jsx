import React from 'react'
import Image from 'next/image'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import {
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Alert
} from '@mui/material'
import TemplateDefault from '../../../src/templates/Default'
import theme from '../../../src/theme'
import { initialValues, validationSchema } from '../signup/formValues'
import useToasty from '../../../src/contexts/Toasty'

const Signin = () => {
  const { setToasty } = useToasty()
  const router = useRouter()
  const [ session ] = useSession()

  const handleFormSubmit = async values => {
    console.log("OK login comeca aqui 1#")
    signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: 'http://localhost:3000/user/dashboard',
    })

    console.log("OK login termina aqui 2#", values)
  }
  
  const handleGoogleLogin = () => {
    signIn('google', {
      callbackUrl: 'http://localhost:3000/user/dashboard',
    })
  }

  return (
    <TemplateDefault> 
      <Container 
        maxWidth="sm" 
        component="main" 
        sx={{ padding: theme.spacing(1), marginBottom: 5 }}
      >
        <Typography component="h1" variant='h2' align="center" color="textPrimary">  
          Entre em sua Conta
        </Typography>        
      </Container>

      <Container maxWidth="sm">
        <Box sx={{ backgroundColor: theme.palette.background.white, padding: theme.spacing(3), marginTop: '.4rem' }}>

          <Box display="flex" justifyContent="center">
            <Button 
              variant="contained"
              color="primary"
              onClick={handleGoogleLogin}
              startIcon={
                <Image src="/images/logo_google3.png" width={20} height={20} alt="Login com Google" />
              }
            >
              Entrar com Google
            </Button>
          </Box>
            <Box 
              sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#e8e8e8',
                width:'100%',
                height: '2px',
                margin: theme.spacing(7, 0, 4),
              }}
            >
              <span style={{backgroundColor:'white', padding:'0 30px'}}>ou</span>
            </Box>
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
          >
            {
              ({
                touched, 
                values, 
                errors,                
                handleChange,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    {
                      router.query.i === '1'
                        ? (
                          <Alert elevation={6} variant="filled" severity="error" sx={{ margin: '20px 0'}}>
                            Usuario ou Senha invalidos.
                          </Alert>
                        ) : null
                    }

                    <FormControl fullWidth error={errors.email && touched.email} sx={{}}>
                      <InputLabel sx={{}}>E-mail</InputLabel>
                      <Input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.email && touched.email ? errors.email : null }
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.password && touched.password} sx={{}}>
                      <InputLabel sx={{}}>Senha</InputLabel>
                      <Input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.password && touched.password ? errors.password : null }
                      </FormHelperText>
                    </FormControl>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ marginTop: '1.2rem'}}
                    >
                      Entrar
                    </Button>

                    <Typography component="span" variant='body1' align="left" color="textPrimary" sx={{ marginTop: '10px'}}>  
                      Não tem conta? 
                      <Link style={{ marginLeft: '12px' }} href="/auth/signup">Crie um aqui</Link>
                    </Typography>
                  </form>
                )
              }
            }
          </Formik>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Signin