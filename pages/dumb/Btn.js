import Link from 'next/link'

const Btn = (prop) => (
  <div>
    <Link href={prop.goto}>
      <a>
        { prop.children }
      </a>
    </Link>
    <style jsx>
      {
        `
        a:active {
          background:cyan;
          color: navy;
          color: navy;
          background: cyan;
          border-color: cyan;
        }
        a:focus {
          background:cyan;
          color: navy;
          background: cyan;
          border-color: cyan;
        }
        a:hover {
          background:cyan;
          color: navy;
          background: cyan;
          border-color: cyan;
        }
        a {
          color: cyan;
          display: flex;
          padding: 5%;
          // align-itens: center;
          // justify-content: center;
          border: solid 1px;
          text-decoration: none;
          margin: 5px;
        }
        `
      }
    </style>
  </div>
)
export default Btn
