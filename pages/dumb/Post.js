import Link from 'next/link'
const Post = ({img, date, title, desc, tags, })=>(
    <article className="mdl-cell mdl-cell--5-col mdl-cell--12-col-tablet mdl-cell--12-col-phone mdl-card mdl-shadow--3dp">
        <header className="mdl-card__media">
            <img src={img} />
        </header>
        <div className="mdl-card__time">
            <time dateTime="1994-06-05 10:30">{ date }</time>
        </div>
        <div className="mdl-card__title">
            <Link href={`/blog?introducao-ao-nextjs`}>
                <a href="">
                    <h4 className="mdl-card__title-text">{ title }</h4>
                </a>
            </Link>
        </div>
        <div className="mdl-card__supporting-text">
            <p className="mdl-typography--font-light mdl-typography--subhead">{ desc }</p>
            <footer>
              <span className="categories">{ tags }</span>
            </footer>
        </div>
        <div className="mdl-card__actions">
            <Link href={`/blog/introducao-ao-nextjs`}>
                <a className="android-link dark mdl-button mdl-js-button mdl-typography--text-uppercase" href="" data-upgraded=",MaterialButton">
                    Leia o post 
                    <i className="material-icons">chevron_right</i>
                </a>
            </Link>
        </div>
        <style jsx>{
            `
                .mdl-card__time {
                    padding-left:16px !important;
                    padding-top:10px !important;
                }
                .mdl-card__media {
                    width:100px !inportant;
                    heigth:100px;
                    backcground: url('/static/react.png')
                    backcground-size:cover;
                }
                img {
                    width: 100%;
                }
            `
        }</style>
    </article>
)
export default Post