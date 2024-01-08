import Link from 'next/link'
import slugify from 'slugify'

import { 
    Container, 
    Typography, 
    Paper, 
    InputBase, 
    IconButton, 
    Grid, 
} from '@mui/material' 

import SearchIcon from '@mui/icons-material/Search'

import dbConnect from  '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import TemplateDefault from '../src//templates/Default'
import Card from '../src/components/Card'
import { formatCurrency } from '../src/utils/currency'

const Home = ({ products }) => {

    return (
        <TemplateDefault>
            <Container maxWidth="md" sx={{ padding:'1rem'}}>
                <Typography component="h1" variant='h3' align='center' color="textPrimary">
                    O que deseja encontrar?
                </Typography>
                <Paper sx={{
                    display:'flex',
                    justifyContent:'center',
                    padding: '1rem',
                    marginTop: '1rem',
                }}>
                    <InputBase
                        placeholder='EX.: Iphone 12 com garantia'
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="md" sx={{ padding:'1rem'}}>
                <Typography component="h1" variant="h4" align="center" color="textPrimary" sx={{ marginBottom: '1.5rem'}}>Destaques</Typography>
                <Grid container spacing={4}>
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
                        <Link href={`/category/name/3`}>
                         
                                <Card
                                    image="https://source.unsplash.com/random"
                                    title="XBox 360"
                                    subtitle="182.00" 
                                />
                            
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <Card
                            image="https://source.unsplash.com/random"
                            title="HeadPhone"
                            subtitle="92.00" 
                        />
                    </Grid>

                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps() {
    await dbConnect()

    const products = await ProductsModel.aggregate([{
        $sample: { size: 6 }
    }])

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}


export default Home