import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const TITLE = 'Dartem';
const DESC = 'Academia de baile';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* https://ahrefs.com/blog/open-graph-meta-tags/ */}
      <meta property="og:title" content={TITLE} key="title" />
      <meta property="og:description" content={DESC} />
      <meta property="og:image" content="/favicon-dark.png" key="logo" />
      <meta property="og:url" content="/" key="logo" />

      <link
        rel="icon"
        type="image/ico"
        href="favicon.ico"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        href="favicon-dark.png"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
    <Component {...pageProps} />
  </>
}
