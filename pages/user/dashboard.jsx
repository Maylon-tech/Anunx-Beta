import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

import { 
  Button,  
  Container, 
  Grid, 
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, 
} from '@mui/material'

import { getSession } from 'next-auth/client'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import dbConnect from '../../src/utils/dbConnect'
import useToasty from '../../src/contexts/Toasty'
import { formatCurrency } from '../../src/utils/currency'
import ProductsModel from '../../src/models/products'

const Home = ({ products, userId }) => {
  const { setToasty } = useToasty()  // Chamada do Toasty do ContextAPI

  const [openConfirmModal, setOpenConfirmModal] = useState(false)   //state para controle do estado do Modal.
  const [removedProducts, setRemovedProducts] = useState([])
  const [productId, setProductId] = useState()  //  state para controle do fluxo de deletar anuncios.

  // Function para fechar Modal.
  const handleCloseModal = () => setOpenConfirmModal(false)

  // funciton para Remover o produto do DB pelo ID no click do Modal btn-(remover)
  const handleClickRemove = (productId) => {
    setProductId(productId)
    setOpenConfirmModal(true)
  }

  // Deleta o dado da api pelo axios.delete()
  const handleConfirmRemove = () => {
    console.log("remover anuncio NOW!")
    axios.delete('/api/products/delete', {
      data: {
        id: productId
      }
    })
      .then(handleSuccess)  // se der certo chama funcao SUCESSO!
      .catch(handleError)  // se der errado chama funcao de ERRO!
  }

  const handleSuccess = () => {
    console.log('Ok deletou')

    setOpenConfirmModal(false) // apos confirmacao fecha modal.
    setRemovedProducts([...removedProducts, productId])  // state que busca os removidos + o que esta removendo.

    setToasty({
        open: true,
        text: 'Anuncio Removido com sucesso',
        severity: 'success',
    })
  }

  const handleError = () => {
    setOpenConfirmModal(false)
      setToasty({
          open: true,
          text: 'Ops, ocorreu um erro',
          severity: 'error',
      })
  }

  return (
    <TemplateDefault>
        {/* MODAL */}
      <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>
          Deseja remover este anúncio?
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao Confirmar essa operação não poderá voltar atrás.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button onClick={handleConfirmRemove} autoFocus>
            Remover
          </Button>
        </DialogActions>

      </Dialog>

      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center">
          Meus Anuncios
        </Typography>
        <Link href={'/user/publish'} passHref>
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ margin: '2rem auto', display: 'inline-block'}}
          >
            Publicar novo Anuncio
          </Button>
        </Link>

      </Container>
   
      <Container amxWidth="md">
        {
          products.length === 0 &&
          <Typography component="div" variant="body1" align="center" color="textPrimary" gutterBottom>
            Nunhum Anuncio Publicado.
          </Typography>
        }
        <Grid container spacing={4}>
          {
            products.map(product => {
              if(removedProducts.includes(product._id)) return null
              return (
              <Grid key={product._id} item xs={12} sm={6} md={4}>
                <Card 
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={formatCurrency(product.price)}
                  actions={
                    <>
                      <Button size="small" color="primary">
                          Editar
                      </Button>
                      <Button size="small" color="primary" onClick={() => handleClickRemove(product._id)}>
                          Remover
                      </Button>
                    </>
                  }
                />
              </Grid>
            )})
          }         
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

// Indicacao _ primeira Parte
Home.requireAuth = true

// Consultar o Banco - usando o ProductsModel.
export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  // connecta com Banco de Dados
  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': session.userId })

    return {
      props: {
        // passa para string e depois faz o Parse. (o que vem do MOngo)
        products: JSON.parse(JSON.stringify(products))
      }
    }
}


export default Home 