// pages/_app.js
import "../styles/globals.css";
import RootLayout from "./layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const ProfilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Christopher Ace Labador",
      alternateName: [
        "Alas",
        "Alas.dev",
        "Alas Labador",
        "Ace Labador Portfolio",
      ],
      jobTitle: [
        "Developer",
        "Software Developer",
        "Software Engineer",
        "Web Developer",
        "React Developer",
        "Next.js Developer",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Meycauayan",
        addressRegion: "Bulacan",
        addressCountry: "PH",
      },
      url: "https://acelabador.vercel.app",
      description: "Software Engineer specializing in React & Next.js",
      sameAs: [
        "https://www.linkedin.com/in/alasdev",
        "https://github.com/Alas-3",
        "https://x.com/Ac3Labador",
        "https://www.instagram.com/ac3labador/",
        "https://www.facebook.com/ace.labador.3",
        "https://www.credly.com/users/ace-labador",
      ],
    },
  };

  const Localbusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alas.dev",
    alternateName: ["Alas dev", "Alas Web Development", "Alas Portfolio"],
    logo: [
      "https://acelabador.vercel.app/images/logo.png",
      "https://acelabador.vercel.app/favicon.ico",
    ],
    image: "https://acelabador.vercel.app/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meycauayan, Bulacan",
      addressLocality: "Meycauayan",
      addressRegion: "Bulacan",
      postalCode: "3020",
      addressCountry: "PH",
    },
    url: "https://acelabador.vercel.app",
    description:
      "Web developer offering front-end development services specializing in React and Next.js.",
    priceRange: "$$",
    telephone: "Reach me thru email alas.dev@outlook.com",
    sameAs: [
      "https://www.linkedin.com/in/alasdev",
      "https://github.com/Alas-3",
      "https://x.com/Ac3Labador",
      "https://www.instagram.com/ac3labador/",
      "https://www.facebook.com/ace.labador.3",
      "https://www.credly.com/users/ace-labador",
    ],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alas.dev",
    alternateName: ["Alas", "Alas Web Development", "Alas Portfolio"],
    url: "https://acelabador.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/alasdev",
      "https://github.com/Alas-3",
      "https://x.com/Ac3Labador",
      "https://www.instagram.com/ac3labador/",
      "https://www.facebook.com/ace.labador.3",
      "https://www.credly.com/users/ace-labador",
    ],
    logo: [
      "https://acelabador.vercel.app/images/logo.png",
      "https://acelabador.vercel.app/favicon.ico",
    ],
    description:
      "Alas.dev is a freelance software engineer dedicated to providing high-quality web development solutions.",
    email: "alas.dev@outlook.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Meycauayan, Bulacan",
      addressLocality: "Meycauayan",
      addressRegion: "Bulacan",
      postalCode: "3020",
      addressCountry: "PH",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Christopher Ace Labador | Portfolio",
    alternateName: [
      "Ace Labador",
      "Christopher Ace Labador",
      "Ace Labador Portfolio",
      "Christopher Ace Labador Portfolio",
      "Alas Dev",
      "alas.dev",
      "acelabador.vercel.app",
    ],
    description:
      "Ace Labador: A Software Engineer specializing in React and Next.js. Explore my portfolio showcasing web development skills, certificates, works and projects.",
    url: "https://acelabador.vercel.app/",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://acelabador.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    sameAs: [
      "https://www.linkedin.com/in/alasdev",
      "https://github.com/Alas-3",
      "https://x.com/Ac3Labador",
      "https://www.instagram.com/ac3labador/",
      "https://www.facebook.com/ace.labador.3",
      "https://www.credly.com/users/ace-labador",
    ],
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://acelabador.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://acelabador.vercel.app/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://acelabador.vercel.app/projects",
      },
    ],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://acelabador.vercel.app/",
    url: "https://acelabador.vercel.app/",
    name: "Christopher Ace Labador | Portfolio",
    description:
      "Ace Labador: A Software Engineer specializing in React and Next.js. Explore my portfolio showcasing web development skills, certificates, works and projects.",
    inLanguage: "en",
    mainEntityOfPage: "https://acelabador.vercel.app/",
    image: {
      "@type": "ImageObject",
      url: "https://acelabador.vercel.app/images/logo.png",
      height: 800,
      width: 1200,
    },
    sameAs: [
      "https://www.linkedin.com/in/alasdev",
      "https://github.com/Alas-3",
      "https://x.com/Ac3Labador",
      "https://www.instagram.com/ac3labador/",
      "https://www.facebook.com/ace.labador.3",
      "https://www.credly.com/users/ace-labador",
    ],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christopher Ace Labador",
    additionalName: ["Ace Labador", "Ace", "Alas"],
    url: "https://acelabador.vercel.app/",
    image: "https://acelabador.vercel.app/images/logo.png",
    description:
      "Software Engineer specializing in React and Next.js based in Meycauayan, Bulacan PH.",
    sameAs: [
      "https://www.linkedin.com/in/alasdev",
      "https://github.com/Alas-3",
      "https://x.com/Ac3Labador",
      "https://www.instagram.com/ac3labador/",
      "https://www.facebook.com/ace.labador.3",
      "https://www.credly.com/users/ace-labador",
    ],
  };

  return (
    <>
      <Head>
        {/* JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ProfilePage) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Localbusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
        />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;
