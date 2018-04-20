
const Content = (prop)=> (
  <div className="android-content mdl-layout__content">
    <a name="top"></a>
    <a id="top"></a>
    <section id="me" className="android-me-section mdl-typography--text-center">
      <header className="android-header">
        <h2 className="android-font android-slogan">Full-Stack Developer</h2>
      </header>
      <p className="android-sub-slogan"></p>

      <a id="down" href="#" onClick={ ()=> goTo('#talks') }>
        <button className="android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">
        <i className="material-icons">expand_more</i>
        <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
      </a>
      <div id="self">
        <img id="pict" src="/static/wjuniorw.png" />
      </div>
      <p id="info" className="android-sub-slogan">
        <i>Mobile Developer </i> na
        <a className="android-link" href="https://www.uxmob.com/" target="_blank"> UXMob</a>.
      </p>
    </section>
    <section className="android-opensource-section">
      <div className="android-opensource-section-text">
        <h3 className="mdl-typography--display-1-color-contrast">Open source</h3>
        <p>Veja os projetos open source que mantenho no GitHub</p>
        <a className="android-link dark mdl-button mdl-js-button mdl-typography--text-uppercase" href="./projetos" data-upgraded=",MaterialButton">veja os projetos</a>
      </div>
      <img src="./assets/img/opensource.jpg" />
    </section>
    <section id="talks" className="android-talks-section">
      <a name="talks"></a>
      <img src="assets/img/talks.jpg" />
      <div className="android-talks-band">
        <div className="android-talks-band-text">
          <h3 className="mdl-typography--display-2 mdl-typography--font-thin">Minhas palestras</h3>
          <p className="mdl-typography--headline mdl-typography--font-thin">Veja os slides e conteúdo das minhas últimas palestras em eventos e universidades pelo Brasil</p>
          <p>
            <a className="mdl-typography--font-regular mdl-typography--text-uppercase android-alt-link" href="./talks">
              Veja as palestras <i className="material-icons">chevron_right</i>
            </a>
          </p>
        </div>
      </div>
    </section>
    <section className="android-blog-section">
      <h3 className="android-section-title mdl-typography--display-1-color-contrast">Últimos Posts</h3>
      <div className="android-card-container mdl-grid">
        <article className="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card mdl-shadow--3dp">
          <header className="mdl-card__media">
            <img src="/assets/img/blog/docker.png" />
          </header>
          <div className="mdl-card__time">
            <time dateTime="2015-10-05 10:30">5/10/2015</time>
          </div>
          <div className="mdl-card__title">
            <a href="./blog/introducao-ao-docker">
              <h4 className="mdl-card__title-text">Introdução ao Docker</h4>
            </a>
          </div>
          <div className="mdl-card__supporting-text">
            <p className="mdl-typography--font-light mdl-typography--subhead">Introdução ao desenvolviemento de micro-serviços utilizando Docker</p>
            <footer>
              <span className="categories">docker, desenvolvimento</span>
            </footer>
          </div>
          <div className="mdl-card__actions">
            <a className="android-link dark mdl-button mdl-js-button mdl-typography--text-uppercase" href="./blog/introducao-ao-docker" data-upgraded=",MaterialButton">Leia o post <i className="material-icons">chevron_right</i></a>
          </div>
        </article>
      </div>
    </section>
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
        <a className="android-link mdl-typography--font-light" href="https://twitter.com/@vitorleal" target="_blank"> Twitter </a>
      </div>
    </footer>
    <style jsx>
      {`
        section {
          display: flex;
          flex-direction: column;
        align-items: center;
        width: 100%;
      }
        header {
          width: 100% !important;
          padding-bottom: 10px;
        }
        #down > button {
          position: absolute;
          // top: 25%;
          top: 95%;
          left: 55%;
        }
        @media (max-width: 900px) {
          #down > button {
            // top: -5%;
            top: 30%;
            left: 60%;
            position: absolute;
          }
        }
        #self {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: #2c3e50;
          border: none;
        }
        #info {
          font-size: 205%;
        }
        footer {
          background: #2c3e50;
        }
        p > a {
            color: #62ffda;
          }
        #pict {
          width: 90%;
          height: 90%;
          margin: 5%;
          border-radius: 50%;
        }
        #me {
          height: auto;
        }
      `}
    </style>
</div>
)
const goTo = function (to) {
  // window.scrollTo(0,1)
  window.document.querySelector(to).scrollIntoView({
    behavior: 'smooth'
  })
}
export default Content


// const Content = (prop)=> (
//   <div>
//     <h2> { prop.title } </h2>
//     <h4> { prop.content } </h4>
//     <style jsx>
//     {`
//       color: cyan;
//       background: navy;
//       display: flex;
//       justify-content: center;
//       margin-top: 10px;
//       flex-direction: column;
//       align-items: center;
//
//       h2 {
//         // padding: 15%;
//         border-bottom: solid 1px;
//         // border-block-start-style: dashed;
//       }
//       h4 {
//         padding: 10%;
//         border-bottom: solid 1px;
//         // border-block-start-style: dashed;
//       }
//     `}
//     </style>
//   </div>
// )
// export default Content
