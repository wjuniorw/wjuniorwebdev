//  import 

const ME = ({goTo})=> (
    <section id="me" className="android-me-section mdl-typography--text-center">
      <header className="android-header">
        <h2 className="android-font android-slogan">Full-Stack Developer </h2>
      </header>
      <p className="android-sub-slogan"></p>

      <div id="self">
        <img id="pict" src="/static/wjuniorw.png" />
        <a id="down" href="#" onClick={ ()=> goTo('#talks') }>
        <button className="android-fab mdl-button mdl-button--colored mdl-js-button mdl-button--fab mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">
        <i className="material-icons">expand_more</i>
        <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
        </a>
      </div>
      <p id="info" className="android-sub-slogan">
        <i>Mobile Developer </i> na
        <a className="android-link" href="https://www.uxmob.com/" target="_blank"> UXMob</a>.
      </p>
      <style jsx>
        {`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 690px;
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
            top: 20%;
            left: 60%;
            position: absolute;
          }
          #self > button {
            top: 30%;
            left: 60%;
            position: absolute;
          }
          #me {
            height: 435px;
          }
        }
        #self {
          width: 200px;
          height: 200px;
          border-radius: 50%;
         background-color: #2c3e50;
        /*background-color: #44bca8;*/
          border: none;
        }
        #pict {
          width: 90%;
          height: 90%;
          margin: 5%;
          border-radius: 50%;
        }
        #info {
          font-size: 205%;
        }
        `}
      </style>
    </section>
)
export default ME