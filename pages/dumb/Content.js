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
</div>
)
const goTo = function (to) {
  // window.scrollTo(0,1)
  window.document.querySelector(to).scrollIntoView({
    behavior: 'smooth'
  })
}
export default Content
