import Head from './Head'
import Header from './Header'
import Drawer from './Drawer'

const Main = ({title, headTitle, children})=> (
  <section className="mdl-layout mdl-js-layout mdl-layout--fixed-header demo-layout-transparent">
    <Head title={headTitle} >
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Header title={title}/>
    <Drawer />
    { children }
    <div className="mdl-layout__obfuscator"></div>
  </section>
)

export default Main
