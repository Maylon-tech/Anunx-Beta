import React from 'react'
import TemplateDefault from '../../src/templates/Default'
import { 
    Box,
    Button,
    Container, 
    IconButton, 
    Select, 
    TextField, 
    Typography 
} from '@mui/material'
import theme from '../../src/theme'
import { DeleteForever } from '@mui/icons-material'

const Publish = () => {
  return (
    <TemplateDefault>
        <Container maxWidth='sm' sx={{ padding: '3rem'}}>
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
                <Typography component="h6" variant="h6" color="textPrimary">
                    Titulo do Anuncio
                </Typography>
            <TextField 
                label="ex.: bicycle aro 18"
                size="small"
                fullWidth
            />

            <br /> <br />

            <Typography component="h6" variant="h6" color="textPrimary">
                Categoria
            </Typography>

            <Select 
                native
                value=""
                fullWidth
                onChange={() => {}}
                inputProps={{ name: 'age',}}
            >
                <option value="">Selecione</option>
                <option value={1}>Bebe e Crianca</option>
                <option value={2}>Agricultura</option>
                <option value={3}>Moda</option>
                <option value={4}>Carros, Motos e Barcos</option>
                <option value={5}>Servicos</option>
                <option value={6}>Lazer</option>
                <option value={7}>Moveis, Casa, Jardim</option>
                <option value={8}>Imovies</option>
                <option value={9}>Equipamentos e Ferramentas</option>
                <option value={10}>Celulares e Tabletes</option>
                <option value={11}>Esportes</option>
                <option value={12}>Tecnologia</option>
                <option value={13}>Emprego</option>
                <option value={14}>Outros</option>
            </Select>
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
                    Imagens
                </Typography>
                <Typography component="div" variant="body2" color="textPrimary">
                    A primeira imagem e a foto principal do seu anuncio.
                </Typography>

                {/* Thumbs COntainer  */}
                <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                    {/*  DropZone Place */}
                    <Box 
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '.8rem',
                        margin: '0 15px 15px 0',
                        width: '200px', 
                        height: '150px', 
                        backgroundColor: theme.palette.background.default,
                        border: '2px dashed #111'
                    }}>
                        <Typography variant="body2" color="textPrimary">
                            Clique para adicionar ou arraste a imagem aqui.
                        </Typography>
                    </Box>

                    {/* Thumb Container  */}
                    <Box 
                        sx={{ 
                            width: '200px', 
                            height: '150px', 
                            position: 'relative',
                            background: 'url(https://source.unsplash.com/random)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            '> hover': 'flex' 
                        }}>

                        {/* Box Main - image  */}
                        <Box 
                        sx={{
                            position:'absolute',
                            background: 'blue',
                            bottom: '0',
                            left: '0',
                            padding: '.5rem'
                        }}>
                            <Typography variant='body2' color='secondary'>Principal</Typography>
                        </Box>

                        {/* Box Mask - garbage  */}
                        <Box sx={{ 
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.7)',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 

                        }}>
                            <IconButton color="secondary">
                                <DeleteForever fontSize="large" />
                            </IconButton>
                        </Box>
                    </Box>

                </Box>
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
                <Typography component="div" variant="body2" color="textPrimary">
                    Escreva os detalhes do que esta vendendo.
                </Typography>
                <TextField 
                    multiline
                    rows={6}
                    variant="outlined"
                    fullWidth
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
                <Typography 
                    component="h6" 
                    variant="h6" 
                    color="textPrimary"
                    gutterBottom
                >
                    Dados de Contatos
                </Typography>
                
                <TextField 
                    label="Nome"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br /> <br />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <br /> <br />
                <TextField 
                    label="Telefone"
                    variant="outlined"
                    size="small"
                    fullWidth
                />
            </Box>
        </Container>

        <Container maxWidth="md" sx={{ marginTop: '2rem'}}>
            <Box textAlign="right">
                <Button variant='contained' color="primary">
                    Publicar Anuncio
                </Button>
            </Box>
        </Container>
    </TemplateDefault>
  )
}

export default Publish