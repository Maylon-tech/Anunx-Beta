import React from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import { useRouter } from 'next/router'

import {
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  CircularProgress,
} from '@mui/material'
import TemplateDefault from '../../../src/templates/Default'
import theme from '../../../src/theme'
import useToasty from '../../../src/contexts/Toasty'
import { initialValues, validationSchema } from './formValues'

const Signup = () => {
  const router = useRouter()
  const { setToasty } = useToasty()

  const handleFormSubmit = async values => {
    console.log("Ok deu certo chefe 1#")
    const response = await axios.post('/api/users', values)

    if (response.data.success) {
      console.log("dados cadastrados com sucesso.!")

      // toast modal - contextAPI
      setToasty({
        open: true,
        severity: 'success',
        text: 'Cadastro realizado com sucesso.!'
      })
      // redirect
      router.push('/auth/signin')
    }
    console.log("Ok deu certo Final. 2#")
  }


  return (
    <TemplateDefault>
      <Container 
        maxWidth="sm" 
        component="main" 
        sx={{ padding: theme.spacing(1), marginBottom: 5 }}
      >
        <Typography component="h1" variant='h2' align="center" color="textPrimary">  
          Crie sua Conta
        </Typography>
        <Typography component="h5" variant='h5' align="center" color="textPrimary">
          E anuncie para todo Brasil
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box sx={{ backgroundColor: theme.palette.background.white, padding: theme.spacing(3), marginTop: '.4rem' }}>
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
                isSubmitting,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth error={errors.name && touched.name} sx={{}}>
                      <InputLabel>Nome</InputLabel>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.name && touched.name ? errors.name : null }
                      </FormHelperText>
                    </FormControl>

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

                    <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} sx={{}}>
                      <InputLabel sx={{}}>Confirmação de Senha</InputLabel>
                      <Input
                        name="passwordConf"
                        type="password"
                        value={values.passwordConf}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        { errors.passwordConf && touched.passwordConf ? errors.passwordConf : null }
                      </FormHelperText>
                    </FormControl>

                    {
                      isSubmitting
                        ? (
                          <CircularProgress sx={{ display:'block', margin: '10px auto'}} />
                        ) : (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: '1.2rem'}}
                          >
                            Cadastrar
                          </Button>
                        )
                    }

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

export default Signup