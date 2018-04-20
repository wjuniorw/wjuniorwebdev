
import Head from './dumb/Head'
// import Link from 'next/link'
import Btn from './dumb/Btn'
import Main from './dumb/Main-new'
import Header from './dumb/Header'
import Content from './dumb/Content'

import './static/main.css'
// import './static/index.styl'
import './static/material.min.css'

const View = (prop)=>(
    <div className="mdl-layout__container">
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1" />
        </Head>
        { prop.children }
    </div>
)
const Section = (prop)=>(
      <Main  headTitle={'WJunior WebDev'} title={'Wilson Junior'}>
        <Content />
      </Main>
)

export default () => <View ><Section /></View>
