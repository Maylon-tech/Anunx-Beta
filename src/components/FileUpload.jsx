import React from 'react'
import { 
    Box, 
    Typography,
    IconButton,
} from '@mui/material'
import { useDropzone } from 'react-dropzone'
import styled from '@emotion/styled'
import DeleteForever from '@mui/icons-material/DeleteForever'
import theme from '../theme'

const ThumbContainerImage = styled('div')({
    width: '200px', 
    height: '150px', 
    position: 'relative',
    background: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:hover ~ $ThumbRemoveBox': {
        display: 'block',
        backgroundColor: 'green',
    }
})

const ThumbRemoveBox = styled('div')({
    width: '100%',
    height: '100%',
    background: 'red',
    display: 'none', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute'
})

const FileUpload = ({ files, errors, touched, setFieldValue }) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
           
            const newFiles = acceptedFile.map(file => {  // Pra cada LOOP cria novo Objeto.
                return Object.assign(file, {   // Cria novo Objeto.
                    preview: URL.createObjectURL(file)  // URL metodo JS - cria a URL
                })
            })

            setFieldValue('files', [
                ...files,
                ...newFiles,
            ])
        }
    })

    const handleRemoveFile = (filePath) => {
        console.log(filePath, files)
        const newFileState = files.filter(file => file.path !== filePath)
        setFieldValue('files', newFileState)
    }

  return (
            <>
                <Typography component="h6" variant="h6" color={errors && touched ? 'error' : 'textPrimary'}>
                    Imagens
                </Typography>
                <Typography component="div" variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
                    A primeira imagem e a foto principal do seu anuncio.
                </Typography>
                        {
                            errors && touched
                                ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
                                : null
                        }
                <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                            {/*  DropZone Place */}
                            <Box 
                                sx={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        padding: '.8rem',
                                        margin: '0 15px 15px 0',
                                        width: '200px', 
                                        height: '150px', 
                                        backgroundColor: theme.palette.background.default,
                                        border: '2px dashed #111'
                                    }}
                                {...getRootProps()}
                            >
                                <input name="files" {...getInputProps()} />
                                <Typography variant="body2" color={errors && touched ? 'error' : 'textPrimary'}>
                                    Clique para adicionar ou arraste a imagem aqui.
                                </Typography>
                            </Box>
                                                
                            {
                                files.map((file,index) => (
                                    <ThumbContainerImage 
                                        style={{ backgroundImage: `url(${file.preview })` }}
                                        key={file.name}
                                    >
                                        {
                                            index === 0 
                                            ? <Box 
                                                sx={{
                                                    position:'absolute',
                                                    background: 'darkblue',
                                                    bottom: '0',
                                                    left: '0',
                                                    padding: '.5rem'
                                                }}
                                            >
                                                <Typography variant='body2' color='secondary'>Principal</Typography>
                                            </Box>
                                            : null
                                        }
                                                                
                                        {/* Remove Trash Layer */}
                                        <ThumbRemoveBox>
                                            <IconButton color="secondary" onClick={() => handleRemoveFile(file.path)}>
                                                <DeleteForever fontSize="large" />
                                            </IconButton>
                                        </ThumbRemoveBox>
                                    </ThumbContainerImage>
                                ))
                            }
                </Box>
            </>
  )
}

export default FileUpload