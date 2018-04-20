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
    <link rel="stylesheet" href="/_next/static/style.css" />
    <script src="/static/material.js" />
    <title>{ title }</title>
    { children }
    <script>
    </script>
  </Head>
)
export default HtmlHead
