import Head from 'next/head'
const HtmlHead = ({title, children})=> (
  <Head>
    <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1" />
    <meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, user-scalable=no, maximum-scale=1, minimum-scale=1" />
    <meta name="description" content="wjuniorwebdev, Wjunior, wilson junior, web developer" />
    <meta name="theme-color" content="#48CBAB" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="stylesheet" href="/_next/static/style.css" />
    <script src="/static/material.js" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <title>{ title }</title>
    { children }
    <script>
    </script>
  </Head>
)
export default HtmlHead
