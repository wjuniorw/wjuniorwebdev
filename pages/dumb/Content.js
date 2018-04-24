import ME from './Intro'
import OpenSource from './Open-source'
import Skills from './Skills'
import Blog from './Blog'
import Footer from './footer'
const Content = (prop)=> (
  <div className="android-content mdl-layout__content">
    <a name="top"></a>
    <a id="top"></a>
    <ME goTo={goTo} />
    <OpenSource />
    <Skills />
    <Blog />
    <Footer goTo={goTo} />
    <style jsx>
      {`        
        #talks-content {
          // background: url('/static/react.png') center top no-repeat !important;
          // background-size: cover !important;
        }
        #me {
          // height: auto;
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
