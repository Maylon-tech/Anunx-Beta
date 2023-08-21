import { Container } from '@mui/material'
import Header from '../../src/components/Header'

const Default = ({ children }) => {

  return (
    <>
        <Header />
            <Container maxWidth="lg" sx={{ background: "#eee"}}> 
                { children }
            </Container>
         
        <footer>Footer</footer>
    </>
  )
}

export default Default