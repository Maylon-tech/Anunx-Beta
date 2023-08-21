import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Container, 
  Grid, 
  Typography 
} from '@mui/material'
import TemplateDefault from '../../src/templates/Default'

export default function Home() {
  return (
    <TemplateDefault>
      <Container sx={{ padding: '3rem',}} maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Meus Anuncios
        </Typography>

        <Button variant="contained" color="primary" sx={{ margin: '2rem auto', display: 'block'}}>
          Publicar novo Anuncio
        </Button>
      </Container>
   
      <Container amxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                sx={{ width: '100%', paddingTop: '56%'}}
                image={'https://source.unsplash.com/random'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                sx={{ width: '100%', paddingTop: '56%'}}
                image={'https://source.unsplash.com/random'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                sx={{ width: '100%', paddingTop: '56%'}}
                image={'https://source.unsplash.com/random'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                sx={{ width: '100%', paddingTop: '56%'}}
                image={'https://source.unsplash.com/random'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </TemplateDefault>
  )
}
