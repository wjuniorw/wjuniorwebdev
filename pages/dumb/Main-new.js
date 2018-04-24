import Head from './Head'
import Header from './Header'
import Drawer from './Drawer'

const Main = ({title, headTitle, children})=> (
  <section className="mdl-layout mdl-js-layout mdl-layout--fixed-header demo-layout-transparent">
    <Head title={headTitle} />
    <Header title={title}/>
    <Drawer />
    { children }
    <div className="mdl-layout__obfuscator"></div>
  </section>
)
export default Main

