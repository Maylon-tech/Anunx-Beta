import React from 'react'
import { Formik } from 'formik'
import Link from 'next/link'
import {
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'
import { initialValues, validationSchema } from './formValues'

const Signin = () => {
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
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Ok form Enviado!', values)
              }}
          >
            {
              ({
                touched, 
                values, 
                errors,                
                handleChange,
                handleSubmit
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    

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