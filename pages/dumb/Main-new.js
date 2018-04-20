import Head from './Head'
import Header from './Header'
import Drawer from './Drawer'

const Main = ({title, headTitle, children})=> (
  <section className="mdl-layout mdl-js-layout mdl-layout--fixed-header demo-layout-transparent">
    <Head title={headTitle}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

    </Head>
    <Header title={title}/>
    <Drawer />
    { children }
    <div className="mdl-layout__obfuscator"></div>
  </section>
)
export default Main

//
// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
// import Header from './Header'
// import Drawer from './Drawer'
//
// const Main = (prop)=> (
// <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
//   <Header title="Wjunior"/>
//   <div className="mdl-layout__drawer">
//     <span className="mdl-layout-title">Title</span>
//     <nav className="mdl-navigation">
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//     </nav>
//   </div>
//   <main className="mdl-layout__content">
//     <div className="page-content">{ children }</div>
//   </main>
// </div>
//
// )
