import { 
    Container, 
    Typography, 
    Paper, 
    InputBase, 
    IconButton, 
    Grid, 
} from '@mui/material' 

import SearchIcon from '@mui/icons-material/Search'
import TemplateDefault from '../src//templates/Default'
import Card from '../src/components/Card'


const Home = () => {

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
                    <Grid item xs={12} sm={6} md={4}>
                        <Card
                            image="https://source.unsplash.com/random"
                            title="PlayStation 4"
                            subtitle="252.00" 
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <Card
                            image="https://source.unsplash.com/random"
                            title="XBox 360"
                            subtitle="182.00" 
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <Card
                            image="https://source.unsplash.com/random"
                            title="HeadPhone"
                            subtitle="92.00" 
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                    <Card
                            image="https://source.unsplash.com/random"
                            title="Monitor LG"
                            subtitle="122.00" 
                        />
                    </Grid>

                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home