import Head from "next/head"

import Hero from "../components/homepage/Hero"
import About from "../components/homepage/About"
import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandwich Studio</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preload' href='/fonts/neueRegular.otf' as='font' crossOrigin='' />
      </Head>

      <Header />

      <Hero />
      <About />

      <footer>footer</footer>
    </div>
  )
}
