import Home from "./home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Christopher Ace Labador | Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Christopher Ace Labador, showcasing projects and expertise in React & Next.js."
        />
        <meta
          property="og:title"
          content="Christopher Ace Labador | Software Engineer"
        />
        <meta
          property="og:description"
          content="Showcasing projects and skills of Ace Labador, a software engineer specializing in React & Next.js."
        />
        <meta
          property="og:site_name"
          content="Christopher Ace Labador | Portfolio"
        ></meta>
        <meta
          property="og:image"
          content="https://acelabador.vercel.app/images/logo.png"
        />
        <meta property="og:url" content="https://acelabador.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Christopher Ace Labador | Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Ace Labador, a software engineer specializing in React & Next.js."
        />
        <meta
          name="twitter:image"
          content="https://acelabador.vercel.app/images/logo.png"
        />
        <link rel="canonical" href="https://acelabador.vercel.app/" />

        <meta
          name="google-site-verification"
          content="OBwTnzCJhtTRTGjraMYwzcyuh6-Q9XyE-bb0rxaAzOw"
        />
      </Head>
      <div>
        <Home />
      </div>
    </>
  );
}
