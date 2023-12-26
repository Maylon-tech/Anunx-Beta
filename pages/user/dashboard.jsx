import { 
  Button,  
  Container, 
  Grid, 
  Typography 
} from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

export default function Home() {
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
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              image="https://source.unsplash.com/random"
              title="PlayStatio 4"
              subtitle="567.00"
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

          <Grid item xs={12} sm={6} md={4}>
            <Card 
                image="https://source.unsplash.com/random"
                title="XBox 360"
                subtitle="452.00"
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

          <Grid item xs={12} sm={6} md={4}>
            <Card 
                image="https://source.unsplash.com/random"
                title="Keyboard Reload"
                subtitle="378.00"
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

          <Grid item xs={12} sm={6} md={4}>
            <Card 
                image="https://source.unsplash.com/random"
                title="Monitor LG"
                subtitle="241.00"
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

        </Grid>
      </Container>
    </TemplateDefault>
  )
}
