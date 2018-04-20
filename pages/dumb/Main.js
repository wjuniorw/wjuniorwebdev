
import Head from './Head'
import Header from './Header'
import Drawer from './Drawer'

const Main = (prop)=> (
  <div className="demo-layout-transparent mdl-layout mdl-js-layout">
    <Head title={'Firsts steps with nextjs - Wjunior'}>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Header title={prop.title} />
    <Drawer />
    <main className="mdl-layout__content">
      { prop.children }
      <div className="mdl-layout__obfuscator"></div>
    </main>
    <div class="android-content mdl-layout__content">
    </div>
  </div>
)
export default Main
