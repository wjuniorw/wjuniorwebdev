
import Head from './dumb/Head'
import Link from 'next/link'
import Header from './dumb/Header'
import Content from './dumb/Content'
import Menu from './dumb/Menu'
import Main from './dumb/Main'

const Sobre = (prop)=>(
  <Main title={'Welcome to About'} headTitle={'Sobre - WjuniorWebDev'}>
    <Menu />
    <Content title={'Nextjs'} content={'Nextjs é muuuuiiitoo show!!! hueheuheuehuehuehuahua'} />
    <Content title={'Nextjs'} title={'SSR'} content={'Server Side Rendering é muuuuiiitoo show!!! hueheuheuehuehuehuahua'} />
  </Main>
)

export default Sobre
