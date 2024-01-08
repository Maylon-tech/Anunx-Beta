import { 
  Button,  
  Container, 
  Grid, 
  Typography 
} from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { getSession } from 'next-auth/client'
import { dbConnect } from '../../src/utils/dbConnect'
import { formatCurrency } from '../../src/utils/currency'

const Home = ({ products }) => {

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Meus Anuncios
        </Typography>

        <Button variant="contained" color="primary" sx={{ margin: '2rem auto', display: 'block'}}>
          Publicar novo Anuncio
        </Button>
      </Container>
   
      <Container amxWidth="md">
        <Grid container spacing={4}>
          {
            products.map(product => (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Card 
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={formatCurrency(product.price)}
                  actions={
                    <>
                      <Button size="small" color="primary">
                          Editar
                      </Button>
                      <Button size="small" color="primary">
                          Remover
                      </Button>
                    </>
                  }
                />
              </Grid>
            ))
          }         
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

// Indicacao _ primeira Parte
Home.requireAuth = true

// Consultar o Banco - usando o ProductsModel.
export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  // connecta com Banco de Dados
  await dbConnect()

  const products = await ProductsModel.find({
    'user.id': session.userId
  })

    return {
      props: {
        // passa para string e depois faz o Parse. (o que vem do MOngo)
        products: JSON.parse(JSON.stringify(products))
      }
    }
}


export default Home 