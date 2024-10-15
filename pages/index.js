import Home from './home'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title> Christopher Ace Labador | Front-End Engineer</title>
        <meta name="description" content="Portfolio of Christopher Ace Labador, showcasing projects and expertise in React & Next.js." />
        <meta property="og:title" content="Christopher Ace Labador | Front-End Engineer" />
        <meta property="og:description" content="Showcasing projects and skills of Ace Labador, a front-end engineer specializing in React & Next.js." />
        <meta property="og:image" content="https://acelabador.vercel.app/logo.png" />
        <meta property="og:url" content="https://acelabador.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ace Labador | Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Ace Labador, a front-end engineer specializing in React & Next.js." />
        <meta name="twitter:image" content="https://acelabador.vercel.app.com/logo.png" />
        <link rel="canonical" href="https://acelabador.vercel.app/" />
      </Head>
      <div>
        <Home />
      </div>
    </>
  )
}
