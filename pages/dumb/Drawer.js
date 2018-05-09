
const Drawer = (prop) => (
  <div className="android-drawer mdl-layout__drawer">
  <nav className="mdl-navigation">
    <a className="mdl-navigation__link" href="/">Home</a>
    <a className="mdl-navigation__link" href="/blog">Blog</a>
    <a className="mdl-navigation__link" href="/projetos">Projetos</a>
    <a className="mdl-navigation__link" href="/portfolio">Portfolio</a>
    <a className="mdl-navigation__link" href="https://github.com/wjuniorw" target="_blank">GitHub</a>
    <a className="mdl-navigation__link" href="http://www.linkedin.com/in/wjuniorw" target="_blank">
      LinkedIn
    </a>
    <a className="mdl-navigation__link" href="https://twitter.com/@wfs_junior" target="_blank">
      Twitter
    </a>
  </nav>
</div>
)

export default Drawer

// const Drawer = (prop) => (
//   <div className="mdl-layout__drawer">
//     <span className="mdl-layout-title">{ prop.title }</span>
//     <nav className="mdl-navigation">
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//       <a className="mdl-navigation__link" href="">Link</a>
//     </nav>
//   </div>
// )
//
// export default Drawer
