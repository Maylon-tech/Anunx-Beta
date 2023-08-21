import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../src/theme'

export default function MyApp(props) {
  const { Component, pageProps } = props


  return (
    <>
      <Head>
        <title>Anunx - MuiV5</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"></meta>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}