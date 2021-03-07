import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import dynamic from "next/dynamic"

// import Smooth from "smooth-scrolling"

import Hero from "../components/homepage/Hero"
import About from "../components/homepage/About"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useRef } from "react"

const Home = () => {
  const mainContainerRef = useRef(null)

  useEffect(() => {
    let smooth
    if (mainContainerRef.current)
      // wierd stuff but we cant import this at the top level as this package can only run client side (needs access to window / document)
      import("smooth-scrolling").then((Smooth) => {
        smooth = new Smooth.default({
          native: false,
          section: mainContainerRef.current,
          ease: 0.08,
          // listener: (e) => console.log(e),
          // noscrollbar: true,
        })

        smooth.init()
      })
    return () => smooth && smooth.destroy()
  }, [mainContainerRef.current])

  return (
    <>
      <Head>
        <title>Sandwich Studio</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preload' href='/fonts/neueRegular.otf' as='font' crossOrigin='' />
      </Head>

      <Header />
      <main ref={mainContainerRef}>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
})

export default Home
