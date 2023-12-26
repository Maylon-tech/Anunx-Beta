import React from 'react'
import TemplateDefault from '../../src/templates/Default'
import {
    Container,
    Box,
    Grid,
    Typography,
    Chip,
    Card,
    CardHeader,
    CardMedia,
    Avatar
} from '@mui/material'
import theme from '../../src/theme'
import Carousel from 'react-material-ui-carousel'

const product = () => {
  return (
    <TemplateDefault>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Box sx={{
                        backgroundColor: theme.palette.background.white,
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                    }}>
                        <Carousel
                            autoplay={false}
                            animation="slide"
                            indicators={true}
                            navButtonsAlwaysVisible={true}
                            navButtonsProps={{
                                style: {
                                    color: 'white'
                                }
                            }}
                        >
                            <Card sx={{
                                height:'100%'                            
                            }}>
                                <CardMedia 
                                    sx={{ paddingTop: '56%' }}
                                    image="https://source.unsplash.com/random?a=1"
                                    title="Titulo da Imagem"
                                />
                            </Card>
                            <Card sx={{
                                height:'100%'                            
                            }}>
                                <CardMedia 
                                    sx={{ paddingTop: '56%' }}
                                    image="https://source.unsplash.com/random?a=2"
                                    title="Titulo da Imagem"
                                />
                            </Card>
                        </Carousel>
                    </Box>

                    <Box textAlign="left" sx={{
                        margin: '15px 0',
                        backgroundColor: theme.palette.background.white,
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                    }}>
                        <Typography component="span" variant="caption">Publicado 16 abril de 2022</Typography>
                        <Typography component="h4" variant='h4'>Monitor LG</Typography>
                        <Typography component="h4" variant='h4' sx={{ fontWeight: 'bold', marginBottom: '15px' }}>$ 45.00</Typography>
                        <Chip label="Categoria" />
                    </Box>

                    <Box sx={{
                        backgroundColor: theme.palette.background.white,
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                    }}>
                        <Typography component="h6" variant='h6'>Descrição</Typography>
                        <Typography component="p" variant='body2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Magni consequuntur odio pariatur velit esse, 
                            asperiores alias nobis illo ea culpa accusamus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Magni consequuntur odio pariatur velit esse, 
                            asperiores alias nobis illo ea culpa accusamus.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={4}>
                    <Card elevation={0} sx={{
                        
                        backgroundColor: theme.palette.background.white,
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                    }}>
                        <CardHeader
                            avatar={
                                <Avatar>M</Avatar>
                            }
                            title="Nemoto Mailon"
                            subheader="Nemoto@gmail.com"
                        />
                        <CardMedia 
                            image=""
                            title="Nemoto Mailon"
                        />
                    </Card>

                    <Box
                        sx={{
                            margin: '15px 0',
                            backgroundColor: theme.palette.background.white,
                            padding: theme.spacing(3),
                            marginBottom: theme.spacing(3),
                        }}
                    >
                        <Typography component="h6" variant='h6'>Localização</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </TemplateDefault>
  )
}

export default product