import React from 'react'
import theme from '../theme'
import { 
    Box,
    Container, Grid, Typography,
 } from '@mui/material'
import Link from 'next/link'

const Footer = () => {
  return (
    <Container
        sx={{
            borderTop: '1px solid lightgray', 
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {
                paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            }
        }}
    >
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link style={{ textDecoration: 'none' }} passHref href="#">
                        <Typography color="textSecondary" variant='subtitle1' underline='none'>
                            Ajuda e Contato
                        </Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link style={{ textDecoration: 'none' }} passHref href="#">
                        <Typography color="textSecondary" variant='subtitle1' underline='none'>
                            Dicas de seguranca
                        </Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link style={{ textDecoration: 'none' }} passHref href="#">
                        <Typography color="textSecondary" variant='subtitle1' underline='none'>
                            Anunciar e Vender
                        </Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link style={{ textDecoration: 'none' }} passHref href="#">
                        <Typography color="textSecondary" variant='subtitle1' underline='none'>
                            Plano Profissional
                        </Typography>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Footer