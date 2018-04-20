
import Head from './dumb/Head'
import Link from 'next/link'
import Header from './dumb/Header'
import Content from './dumb/Content'
import Menu from './dumb/Menu'
import Main from './dumb/Main'

const Sobre = (prop)=>(
  <Main>
  <div></div>
    <Head title={'Sobre - WjuniorWebDev'}>
      <link rel="stylesheet" href="/css/about.css" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Header title={'Welcome to About'}/>
    <Menu />
    <Content title={'Nextjs'} content={'Nextjs é muuuuiiitoo show!!! hueheuheuehuehuehuahua'} />
    <Content title={'Nextjs'} title={'SSR'} content={'Server Side Rendering é muuuuiiitoo show!!! hueheuheuehuehuehuahua'} />
  </Main>
)

export default Sobre
