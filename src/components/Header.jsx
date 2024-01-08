import React, { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/client'

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
import { AccountCircle } from '@mui/icons-material'

export default function ButtonAppBar() {
  const [ session ] = useSession()
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: 'none', color: 'white'}} href="/">Anunx</Link>
            </Typography>

            {/* Botao ir Para Publish - Publicar Anuncio */}
            <Link href={session ? '/user/publish' : '/auth/signin'} passHref>
              <Button color="secondary" variant='outlined'>
                Anunciar e Vender
              </Button>
            </Link>

            {/* Button Menu e Log In + Avatar */}
            {
              session
                ? (
                  <IconButton 
                    color='secondary' 
                    sx={{ marginLeft: '15px'}} 
                    onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                  >
                    {/* Logica para carregar Avatar - Se logado - senao. */}
                    {
                      session.user.image  // Ainda generico. will Fix
                      ? <Avatar src={session.user.image} />
                      : <AccountCircle />
                    }
                    <Typography variant='subtitle2' color='secondary' sx={{ marginLeft: '6px'}}>
                      {session.user.name }
                    </Typography>
                  </IconButton>
                ) : null
            }

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
              <MenuItem onClick={() => signOut({ callbackUrl: 'http://localhost:3000/user/dashboard'})}>
                Sair
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}