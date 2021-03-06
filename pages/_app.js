import GlobalStyle from "../styles/globalStyle"
import theme from "../styles/defaultTheme"

import { ThemeProvider } from "styled-components"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
