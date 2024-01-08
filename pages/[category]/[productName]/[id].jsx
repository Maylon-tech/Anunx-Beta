import React from 'react'

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
import Carousel from 'react-material-ui-carousel'

import theme from '../../../src/theme'
import TemplateDefault from '../../../src/templates/Default'
import dbConnect from '../../../src/utils/dbConnect'
import ProductsModel from '../../../src/models/products'
import { formatCurrency } from '../../../src/utils/currency'

const Product = ({ product }) => {
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
                            {
                                product.files.map(file => (
                                    <Card key={file.name} sx={{
                                        height:'100%'                            
                                    }}>
                                        <CardMedia 
                                            sx={{ paddingTop: '56%' }}
                                            image={`/uploads/${file.name}`}
                                            title={file.title}
                                        />
                                    </Card>
                                ))
                            }                        
                        </Carousel>
                    </Box>

                    <Box textAlign="left" sx={{
                        margin: '15px 0',
                        backgroundColor: theme.palette.background.white,
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                    }}>
                        {/* DESAFIO */}
                        <Typography component="span" variant="caption">Publicado 16 abril de 2022</Typography>   
                        <Typography component="h4" variant='h4'>{product.title}</Typography>
                        <Typography component="h4" variant='h4' sx={{ fontWeight: 'bold', marginBottom: '15px' }}>{formatCurrency(product.price)}</Typography>
                        <Chip label={product.category} />
                    </Box>

                    <Box sx={{
                        backgroundColor: theme.palette.background.white,
                        padding: theme.spacing(3),
                        marginBottom: theme.spacing(3),
                    }}>
                        <Typography component="h6" variant='h6'>Descrição</Typography>
                        <Typography component="p" variant='body2'>
                            {product.description}
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
                                <Avatar src={product.user.image}>
                                    { product.user.image || product.user.name[0] }
                                </Avatar>
                            }
                            title={product.user.name}
                            subheader={product.user.email}
                        />
                        <CardMedia 
                            image={product.user.image}
                            title={product.user.name}
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
                        {/* DESAFIO */}
                        <Typography component="h6" variant='h6'>
                            Localização
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </TemplateDefault>
  )
}


export async function getServerSideProps({ query }) {
    const { id } = query

    await dbConnect()

    const product = await ProductsModel.findOne({ _id: id })

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}


export default Product