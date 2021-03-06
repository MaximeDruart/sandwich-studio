import Head from "next/head"

import Hero from "../components/homepage/Hero"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandwich Studio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />

      <footer>footer</footer>
    </div>
  )
}
