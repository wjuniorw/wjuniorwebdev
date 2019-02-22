import ME from './Intro'
import OpenSource from './Open-source'
import Skills from './Skills'
import Blog from './Blog'
import Footer from './footer'
import smoothscroll from 'smoothscroll-polyfill'


    // <a href="http://www.freebiebitcoin.com">Earn free bitcoin</a>
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
  // kick off the polyfill!
  smoothscroll.polyfill()
  const alvo = window.document.querySelector(to)
  alvo.scrollIntoView({
    behavior: 'smooth'
  })
}
export default Content
