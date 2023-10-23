import { Box, Container } from '@mui/material'
import Header from '../../src/components/Header'
import Footer from '../components/Footer'
import theme from '../theme'

const Default = ({ children }) => {

  return (
    <>
        <Header />
            <Container maxWidth="lg" sx={{ padding: theme.spacing(6, 0, 6) }}> 
                { children }
            </Container>
        <Footer />
    </>
  )
}

export default Default