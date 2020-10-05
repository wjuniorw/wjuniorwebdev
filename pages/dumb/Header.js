
const Header = ({title})=> (
  <div id="header" className="android-header mdl-layout__header mdl-layout__header--waterfall">
    <div className="mdl-layout__drawer-button"><i className="material-icons">menu</i></div>
    <div className="mdl-layout__header-row">
      <h1 className="android-font android-title mdl-layout-title mdl-typography--text-uppercase">{ title }</h1>
      <div className="android-header-spacer mdl-layout-spacer"></div>
      <div className="android-navigation-container">
        <nav className="android-navigation mdl-navigation">
          <a className="mdl-navigation__link mdl-typography--text-uppercase active" href="/">Home</a>
          <a className="mdl-navigation__link mdl-typography--text-uppercase" href="/projetos">Projetos</a>
          <a className="mdl-navigation__link mdl-typography--text-uppercase" href="/portfolio">Portfolio</a>
        </nav>
      </div>
    </div>
    <style jsx>
      {`
        #header  {
          // box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
          box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);

        }
      `}
    </style>
  </div>
)

export default Header
// const Header = (prop)=> (
//   <header className="mdl-layout__header">
//     <div aria-expanded="false" role="button" tabindex="0" class="mdl-layout__drawer-button"><i class="material-icons"></i></div>
//     <div className="mdl-layout__header-row">
//       <span className="mdl-layout-title">{ prop.title }</span>
//       <br />
//       <div className="mdl-layout-spacer"></div>
//       <nav className="mdl-navigation mdl-layout--large-screen-only">
//         {
//           // prop.menuItens = ['Home', 'Portifolio', 'About']
//           ['Home', 'Projetos', 'Portifolio', 'About'].map((item, i)=> (<a classNameName="mdl-navigation__link" href="" key={i}>{item}</a>))
//         }
//       </nav>
//     </div>
//   </header>
// )
