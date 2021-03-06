import Head from "next/head"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Hero from "../components/homepage/Hero"
import About from "../components/homepage/About"
import Header from "../components/Header"

const Home = () => {
  return (
    <>
      <Head>
        <title>Sandwich Studio</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preload' href='/fonts/neueRegular.otf' as='font' crossOrigin='' />
      </Head>

      <Header />

      <Hero />
      <About />

      <footer>footer</footer>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
})

export default Home
