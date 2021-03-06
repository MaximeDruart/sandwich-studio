import { ThemeProvider } from "styled-components"
import { appWithTranslation } from "next-i18next"

import GlobalStyle from "../styles/globalStyle"
import theme from "../styles/defaultTheme"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
