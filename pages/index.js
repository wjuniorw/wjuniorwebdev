
// import Head from './dumb/Head'
// import Link from 'next/link'
import Btn from './dumb/Btn'
import Main from './dumb/Main-new'
// import Header from './dumb/Header'
import Content from './dumb/Content'

// const View = ({ children})=>(
//     <div className="mdl-layout__container">
//         { children }
//     </div>
// )

const Section = (prop)=>(
      <Main  headTitle={'WJunior WebDev'} title={'Wilson Junior'}>
        <Content />
      </Main>
)

export default () => (
    <div>
      <Section />
    </div>
  )
