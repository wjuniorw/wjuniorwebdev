import Post from './Post'
const Blog = ({})=> (
    <section className="android-blog-section">
      <h3 className="android-section-title mdl-typography--display-1-color-contrast">Últimos Posts</h3>
      <div className="android-card-container mdl-grid">
        <Post img={'/static/react.png'} date={'22/04/2018'} 
              desc={`Introdução ao desenvolviemento de site utilizando Nextjs, um framework ssr (server side rendering) com reactjs`}
              tags={`Nextjs, reactjs e express`} />
      </div>
    </section>
)

export default Blog