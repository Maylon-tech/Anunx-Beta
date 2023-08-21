import Document, { Html, Head, Main, NextScript } from 'next/document'
//import { ServerStyleSheets } from '@mui/material/styles'
import theme from '../src/theme'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA Primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


// MyDocument.getInitialProps = async(ctx) => {

//      // Render App and page and get the context of the page with collected side effects.
//     //const sheets = new ServerStyleSheets()
//     const originalRenderPage = ctx.renderPage

//     ctx.renderPage = () =>
//         originalRenderPage({
//             enhanceApp: (App) => (props) => sheets.collect(<App {...props } />),
//         })
    
//     //const initialProps = await Document.getInicialProps(ctx)

//     //return {
//     //    ...initialProps,
//     //    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
//     // }

// }