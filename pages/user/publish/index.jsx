import React from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

import TemplateDefault from '../../../src/templates/Default'
import { 
    Box,
    Button,
    Container, 
    Select,  
    Typography,
    FormControl,
    InputLabel, 
    InputAdornment,
    MenuItem,
    FormHelperText,
    Input,
    CircularProgress,
} from '@mui/material'
import theme from '../../../src/theme'
import { initialValues, validationSchema } from './formValues'
import FileUpload from '../../../src/components/FileUpload'
import useToasty from '../../../src/contexts/Toasty'
import { getSession } from 'next-auth/client'

const Publish = ({ userId, image }) => {
    const { setToasty } = useToasty()
    const router = useRouter()

    const formValues = {
        ...initialValues,
        userId,
        image,
    }

    const handleSuccess = () => {
        setToasty({
            open: true,
            text: 'Anuncio cadastrado com sucesso',
            severity: 'success',
        })

        //router.push('/user/dashboard')
    }

    const handleError = () => {
        setToasty({
            open: true,
            text: 'Ops, ocorreu um erro, tente novamente',
            severity: 'error',
        })
    }

    const handleSubmit = (values) => {
        const formData = new FormData()
 
        for(let field in values) {
            if(field === 'files'){
                values.files.forEach(file => {
                    formData.append('files', file)
                })
            } else {
                formData.append(field, values[field])
            }
        }

        axios.post('/api/products/add', formData)
        .then(handleSuccess)
        .catch(handleError)    
      
    }

  return (
    <TemplateDefault>
        <Formik
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                ({
                    touched,
                    values,
                    errors,
                    handleChange,  // pra cada input
                    handleSubmit,
                    setFieldValue,
                    isSubmitting,
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>

                            <Input type="hidden" name="userId" value={values.userId} />
                            <Input type="hidden" name="image" value={values.image} />

                            <Container maxWidth='sm' sx={{ marginBottom: '13px'}}>
                                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                                    Publicar Anuncio
                                </Typography>
                                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                                    Quanto mais detalhado, melhor!
                                </Typography>
                            </Container>

                            <Container maxWidth="md">
                                <Box sx={{ 
                                        borderRadius: '10px', 
                                        boxShadow: '1px 1px 7px #444', 
                                        padding: theme.spacing(3), 
                                        backgroundColor: theme.palette.background.white}}
                                >                                    
                                    <FormControl error={errors.title && touched.title} fullWidth>
                                        <InputLabel sx={{ fontWeight: '400', color: theme.palette.primary}}>Título do Anúncio</InputLabel>
                                        <Input 
                                            name="title"
                                            value={values.title}
                                            onChange={handleChange}                                                                                                                                               
                                        />
                                        <FormHelperText>
                                            { errors.title && touched.title ? errors.title : null }
                                        </FormHelperText>
                                    </FormControl>

                                    <br /> <br />
                                    
                                    <FormControl error={errors.category && touched.category} fullWidth>
                                        <InputLabel sx={{ fontWeight: '400', color: theme.palette.primary}}>Categoria</InputLabel>
                                        <Select 
                                            name="category"
                                            value={values.category}
                                            fullWidth
                                            onChange={handleChange}                                            
                                        >                                            
                                            <MenuItem value="Bebe e Crianca">Bebe e Crianca</MenuItem>
                                            <MenuItem value="Agricultura">Agricultura</MenuItem>
                                            <MenuItem value="Moda">Moda</MenuItem>
                                            <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                            <MenuItem value="Servicos">Servicos</MenuItem>
                                            <MenuItem value="Lazer">Lazer</MenuItem>
                                            <MenuItem value="Moveis, Casa, Jardim">Moveis, Casa, Jardim</MenuItem>
                                            <MenuItem value="Imovies">Imovies</MenuItem>
                                            <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                            <MenuItem value="Celulares e Tabletes">Celulares e Tabletes</MenuItem>
                                            <MenuItem value="Esportes">Esportes</MenuItem>
                                            <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                            <MenuItem value="Emprego">Emprego</MenuItem>
                                            <MenuItem value="Outros">Outros</MenuItem>
                                        </Select>
                                        <FormHelperText>
                                            { errors.category && touched.category ? errors.category : null }
                                        </FormHelperText>
                                    </FormControl>
                                </Box>
                            </Container>

                            <Container maxWidth="md" sx={{ marginTop: '2rem'}}>
                                <Box
                                    sx={{ 
                                        borderRadius: '10px', 
                                        boxShadow: '1px 1px 7px #444', 
                                        padding: theme.spacing(3), 
                                        backgroundColor: theme.palette.background.white}}
                                >
                                    <FileUpload 
                                        files={values.files}
                                        errors={errors.files}
                                        touched={touched.files}
                                        setFieldValue={setFieldValue}
                                    />
                                </Box>
                            </Container>

                            <Container maxWidth="md" sx={{ marginTop: '2rem'}}>
                                <Box
                                    sx={{ 
                                        borderRadius: '10px', 
                                        boxShadow: '1px 1px 7px #444', 
                                        padding: theme.spacing(3), 
                                        backgroundColor: theme.palette.background.white}}
                                >
                                    <Typography component="h6" variant="h6" color="textPrimary">
                                        Descricao
                                    </Typography>                                    
                                    <FormControl error={errors.description && touched.description} fullWidth>
                                        <InputLabel sx={{ fontWeight: '400', color: theme.palette.primary}}>Escreva os detalhes do que esta vendendo.</InputLabel>
                                        <Input 
                                            name="description"
                                            multiline
                                            rows={6}
                                            variant="outlined"  
                                            onChange={handleChange}                                         
                                        />
                                        <FormHelperText>
                                            { errors.description && touched.description ? errors.description : null }
                                        </FormHelperText>
                                    </FormControl>
                                </Box>
                            </Container>

                            <Container maxWidth="md" sx={{ marginTop: '2rem'}}>
                                <Box
                                    sx={{ 
                                        borderRadius: '10px', 
                                        boxShadow: '1px 1px 7px #444', 
                                        padding: theme.spacing(3), 
                                        backgroundColor: theme.palette.background.white}}
                                >
                                    <FormControl error={errors.price && touched.price} fullWidth>
                                        <InputLabel sx={{ fontWeight: '400', color: theme.palette.primary}}>Preço de Venda</InputLabel>
                                        <Input 
                                            name="price"               
                                            variant="outlined"  
                                            onChange={handleChange}
                                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}                                         
                                        />
                                        <FormHelperText>
                                            { errors.price && touched.price ? errors.price : null }
                                        </FormHelperText>
                                    </FormControl>                                   
                                </Box>
                            </Container>

                            <Container maxWidth="md" sx={{ marginTop: '2rem'}}>
                                <Box
                                    sx={{ 
                                        borderRadius: '10px', 
                                        boxShadow: '1px 1px 7px #444', 
                                        padding: theme.spacing(3), 
                                        backgroundColor: theme.palette.background.white}}
                                >
                                    <Typography 
                                        component="h6" 
                                        variant="h6" 
                                        color="textPrimary"
                                        gutterBottom
                                    >
                                        Dados de Contatos
                                    </Typography>
                                    <FormControl error={errors.name && touched.name} fullWidth>
                                        <InputLabel sx={{ fontWeight: '400', color: theme.palette.primary}}>Nome</InputLabel>
                                        <Input 
                                            name="name" 
                                            value={values.name}                                          
                                            onChange={handleChange}                                         
                                        />
                                        <FormHelperText>
                                            { errors.name && touched.name ? errors.name : null }
                                        </FormHelperText>
                                    </FormControl>

                                    <FormControl error={errors.email && touched.email} fullWidth>
                                        <InputLabel sx={{ fontWeight: '400', color: theme.palette.primary}}>E-mail</InputLabel>
                                        <Input 
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}                                                                                                                                               
                                        />
                                        <FormHelperText>
                                            { errors.email && touched.email ? errors.email : null }
                                        </FormHelperText>
                                    </FormControl>

                                    <FormControl error={errors.phone && touched.phone} fullWidth>
                                        <InputLabel sx={{ fontWeight: '400', color: theme.palette.primary}}>Telefone</InputLabel>
                                        <Input 
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}                                                                                                                                               
                                        />
                                        <FormHelperText>
                                            { errors.phone && touched.phone ? errors.phone : null }
                                        </FormHelperText>
                                    </FormControl>
                                    
                                </Box>
                            </Container>

                            <Container maxWidth="md" sx={{ marginTop: '2rem'}}>
                                <Box textAlign="right">
                                    {
                                        isSubmitting
                                            ? <CircularProgress sx={{ display:'block', margin: '10px auto'}} />
                                            : <Button type="submit" variant='contained' color="primary">Publicar Anuncio</Button>
                                    }                                    
                                </Box>
                            </Container>
                        </form>
                    )
                }
            }
        </Formik>
    </TemplateDefault>
  )
}

Publish.requireAuth = true

export async function getServerSideProps({ req }) {
    const { userId, user } = await getSession({ req })

    console.log(session)

    return {
        props: {
            userId,
            image: user.image,
        }
    }
}


export default Publish