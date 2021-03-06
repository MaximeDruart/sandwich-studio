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
      import("smooth-scrolling").then((Smooth) => {
        smooth = new Smooth.default({
          native: true,
          section: mainContainerRef.current,
          ease: 0.08,
          // noscrollbar: true,
        })

        smooth.init()
        console.log(smooth)
      })
    return () => smooth && smooth.destroy()
  }, [mainContainerRef.current])

  // useLayoutEffect(() => {
  //   // const Smooth = require("gsap")
  //   // console.log(Smooth)
  //   // const a = import("smooth-scrolling").then((b) => {
  //   //   console.log(b)
  //   // })
  //   // console.log(a)
  //   // console.log(Smooth)
  //   // const section = mainContainerRef.current
  //   // const smooth = new Smooth({
  //   //   native: true,
  //   //   section: section,
  //   //   ease: 0.1,
  //   // })
  // }, [])

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
