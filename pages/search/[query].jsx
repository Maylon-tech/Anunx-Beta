import React, { useState } from 'react'
import slugify from 'slugify'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
    Container,
    Typography,
    Box,
    Grid,
    IconButton,
    InputBase,
    Paper,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'
import Card from '../../src/components/Card'
import ProductsModel from '../../src/models/products'
import { formatCurrency } from '../../src/utils/currency'

const List = ({ products }) => {
    const router = useRouter()
    const [search, setSearch] = useState()

    const handleSubmitSearch = () => {
        router.push({
            pathname: `/search/${search}`,
        })
    }

  return (
    <TemplateDefault>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper component="form" sx={{ 
                        padding: theme.spacing(3), 
                        backgroundColor: theme.palette.background.white,
                        marginBottom: theme.spacing(3),
                        }}>
                        <InputBase 
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Ex.: Iphone 9 plus com garantia'
                            fullWidth                          
                        />
                        <IconButton type="submit" aria-label="search" onClick={handleSubmitSearch}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <Box sx={{
                            backgroundColor: theme.palette.background.white,
                            padding: theme.spacing(3),
                            marginBottom: theme.spacing(3),
                        }}>
                    <Typography component="h6" variant="h6">
                        Anúncios
                    </Typography>
                    <Typography component="span" variant="subtitle2">
                        ENCONTRAR {products.length} ANÚNCIOS
                    </Typography>
                    <Grid container spacing={4} sx={{ marginTop: '5px'}}>
                        {
                            products.map(product => {
                                const category = slugify(product.category).toLocaleLowerCase()
                                const title = slugify(product.title).toLocaleLowerCase()

                                return (
                                    <Grid key={product._id} item xs={12} sm={6} md={4}>
                                        <Link href={`/${category}/${title}/${product._id}`}>
                                            <Card
                                                image={`/uploads/${product.files[0].name}`}
                                                title={product.title}
                                                subtitle={formatCurrency(product.price)}
                                            />
                                        </Link>
                                    </Grid>
                                )
                                
                            })
                        }
                        <Grid item xs={12} sm={6} md={4}>
                            <Card 
                                image={`https://source.unsplash.com/random?a=1`}
                                title="Produto XY"
                                subtitle="$65.00"
                            />
                        </Grid>                        
                    </Grid>
                </Box>
            </Grid>
        </Container>

    </TemplateDefault>
  )
}

// Query da Requisicao
export async function getServerSideProps({ query }) {
    const { q } = query

    const products  = await ProductsModel.find({
        $or: [
            { 
                title: {
                    $regex: q,
                    $options: 'i' 
                } 
            },
            { 
                description: {
                    $regex: q,
                    $options: 'i' 
                } 
            },

        ]
    })

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}


export default List