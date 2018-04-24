import Main from './dumb/Main-new'
import Post from './dumb/Post'
import PostView from './dumb/Post'
// import Header from './dumb/Header'
const posts = [
    {
        title:'Teste...', date:`06/05/2018`, img:'/static/code.png', desc:`teste testando testado testarei`
    }, 
    {
        title:'Introdução ao Nextjs...', date:`06/05/1994`, img:`/static/react.png`, desc:`criando site com nextjs ssr(server side rendering)`
    },
    {
        title:'tesssteee...', date:`06/05/1994`, img:`/static/cpu.png`, desc:`criando site com nextjs ssr(server side rendering)`
    },
]
const post = {
    title:'Introdução ao React...', date:`06/05/2018`, img:`/static/react.png`, desc:`criando site com nextjs, express, ssr(server side rendering)`, tags:'react'
    }

const Blog = ({url})=> (
    
    <Main headTitle={`Wjunior | Blog`} title={ title(url) }>
        {
            url.query.title
            ? renderPost(post)
            : <div className="android-card-container mdl-grid">{ posts.map((item)=> renderPosts(item)) }</div>
        }
    </Main>
)
const renderPost = ({img, date, title, desc, tags,}, i) => (
    <PostView key={i} img={img} date={date} title={title} desc={desc} tags/>
)
const renderPosts = ({img, date, title, desc, tags,}, i) => (
    <Post  img={img} date={date} title={title} desc={desc} tags={tags}/>
)
//const renderPosts = ({img, date, title, desc, tags,}) => ()
const title = url => {
    // console.log(url)
    return url.query.title ? url.query.title.split('-').join(' ') : url.pathname ? url.pathname.slice(1,url.pathname.length) : 'wjunior'
}

export default Blog