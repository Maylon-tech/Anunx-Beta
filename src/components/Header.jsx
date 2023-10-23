import React, { useState } from 'react'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider
 } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import { AccountCircle } from '@mui/icons-material'

export default function ButtonAppBar() {

  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>

            <Link href="/user/publish" >
              <Button color="secondary" variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>

            <IconButton 
              color='secondary' 
              sx={{ marginLeft: '15px'}} 
              onClick={(e) => setAnchorUserMenu(e.currentTarget)}
            >
              {
                true === false
                ? <Avatar src="" />
                : <AccountCircle />
              }
              <Typography variant='subtitle2' color='secondary' sx={{ marginLeft: '6px'}}>
                Nemoto Maylon
              </Typography>
            </IconButton>

            <Menu 
              anchorElem={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Link href="/user/dashboard" underline='none' sx={{textDecoration: 'none'}}>
                <MenuItem>Meus Anuncios</MenuItem>
              </Link>
              <Link href="/user/publish">
                <MenuItem>Publicar novo Anuncio</MenuItem>
              </Link>
              <Divider sx={{ margin: '10px 0'}} />
              <MenuItem>
                Sair
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}