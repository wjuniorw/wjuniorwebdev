const Footer = ({goTo})=> (
    <footer className="android-footer mdl-mega-footer">
      <div className="mdl-mega-footer--top-section">
        <div className="mdl-mega-footer--left-section"></div>
        <div className="mdl-mega-footer--right-section">
          <a className="mdl-typography--font-light" href="#" onClick={ ()=> goTo('#top') }>
            Ir para o topo <i className="material-icons">expand_less</i>
          </a>
        </div>
      </div>
      <div className="mdl-mega-footer--middle-section">
          <p className="mdl-typography--font-light">
            Copyright © 2018 - Wilson Junior - <a href="mailto:wjuniorwebdev@gmail.com">wjuniorwebdev@gmail.com</a>
          </p>
      </div>
      <div className="mdl-mega-footer--bottom-section">
        <a className="android-link mdl-typography--font-light" href="https://wjuniorw.com/"> Home </a>
        <a className="android-link mdl-typography--font-light" href="https://wjuniorw.com/blog"> Blog </a>
        <a className="android-link mdl-typography--font-light" href="https://wjuniorw.com/projetos"> Projetos </a>
        <a className="android-link mdl-typography--font-light" href="https://wjuniorw.com/portfolio"> Portfolio </a>
        <a className="android-link mdl-typography--font-light" href="https://github.com/wjuniorw" target="_blank">GitHub </a>
        <a className="android-link mdl-typography--font-light" href="http://www.linkedin.com/in/wjuniorw" target="_blank"> LinkedIn </a>
        <a className="android-link mdl-typography--font-light" href="https://twitter.com/@wfs_junior" target="_blank"> Twitter </a>
      </div>
      <style jsx>
      {`
        footer {
          background: #2c3e50;
        }
        p > a {
            color: #62ffda;
          }
      `}
      </style>
    </footer>
)
export default Footer