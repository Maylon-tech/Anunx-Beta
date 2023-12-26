import React from 'react'
import TemplateDefault from '../../src/templates/Default'
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
import theme from '../../src/theme'
import Card from '../../src/components/Card'

const list = () => {
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
                            placeholder='Ex.: Iphone 9 plus com garantia'
                            fullWidth                          
                        />
                        <IconButton type="submit" aria-label="search">
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
                        ENCONTRAR 200 ANÚNCIOS
                    </Typography>

                    <Grid container spacing={4} sx={{ marginTop: '5px'}}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card 
                                image={`https://source.unsplash.com/random?a=1`}
                                title="Produto XY"
                                subtitle="$65.00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card 
                                image={`https://source.unsplash.com/random?a=2`}
                                title="Produto ZW"
                                subtitle="$135.00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card 
                                image={`https://source.unsplash.com/random?a=3`}
                                title="Produto RY"
                                subtitle="$38.00"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Container>

    </TemplateDefault>
  )
}

export default list