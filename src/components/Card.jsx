import React from 'react'

import {  
    Card as CardMUI, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography,
    Button,
  } from '@mui/material'


const Card = ({ image, title, subtitle, actions }) => {

  return (
    <CardMUI>
        <CardMedia 
            sx={{ width: '100%', paddingTop: '56%'}}
            image={image}
            title="Titulo da imagem"
        />
        <CardContent>
            <Typography variant="h5" component="h2">
                { title }
            </Typography>
            <Typography>
                { subtitle }
            </Typography>
        </CardContent>

        {
            actions 
            ? (
                <CardActions>
                    { actions }
                </CardActions>
                ) : null
        }       
    </CardMUI>
  )
}

export default Card

//'https://source.unsplash.com/random' 