import React from 'react'
import { Formik } from 'formik'

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
    Input
} from '@mui/material'
import theme from '../../../src/theme'
import { initialValues, validationSchema } from './formValues'
import FileUpload from '../../../src/components/FileUpload'

const Publish = () => {

  return (
    <TemplateDefault>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => {
                console.log("Ok form envidado.", values)
            }}
        >
            {
                ({
                    touched,
                    values,
                    errors,
                    handleChange,  // pra cada input
                    handleSubmit,
                    setFieldValue,
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>
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
                                    <Button type="submit" variant='contained' color="primary">
                                        Publicar Anuncio
                                    </Button>
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

export default Publish