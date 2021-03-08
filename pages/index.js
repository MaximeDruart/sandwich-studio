import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import dynamic from "next/dynamic"

// import Smooth from "smooth-scrolling"

import Hero from "../components/homepage/Hero"
import About from "../components/homepage/About"
import Services from "../components/homepage/Services"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useRef } from "react"

const Home = () => {
  const mainContainerRef = useRef(null)

  useEffect(() => {
    let smooth
    if (mainContainerRef.current)
      // wierd stuff but we cant import this at the top level as this package can only run client side (needs access to window / document)
      import("locomotive-scroll").then((Loco) => {
        console.log(Loco)
        const scroll = new Loco.default()
        // scroll.el = mainContainerRef.current
        scroll.smooth = true

        scroll.init()
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
      <main data-scroll-container ref={mainContainerRef}>
        {/* <div
          style={{ height: "200vh", backgroundImage: "url('/images/mission.jpg')", backgroundSize: "cover" }}
          className='test'
          data-scroll-section
        >
          <div className='test23' data-scroll></div>
        </div> */}
        <Hero />
        <About />
        <Services />
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
