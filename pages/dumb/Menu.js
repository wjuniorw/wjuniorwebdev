import Link from 'next/link'
import Btn from './Btn'
const Menu = (prop)=> (
  <div>
  <Btn goto="/">
    Home
  </Btn>
  <Btn goto="/outros">
    outros
  </Btn>
    <style jsx>
    {`
      color: cyan;
      background: navy;
      display: flex;
      // padding:1%;
      // margin-top: 10px;
      padding: 0.8%;
      margin-top: 1%;
      justify-content: center;

      // a:active {
      //   background:cyan;
      //   color: navy;
      //   color: navy;
      //   background: cyan;
      //   border-color: cyan;
      // }
      // a:focus {
      //   background:cyan;
      //   color: navy;
      //   color: navy;
      //   background: cyan;
      //   border-color: cyan;
      // }
      // a:hover {
      //   background:cyan;
      //   color: navy;
      //   color: navy;
      //   background: cyan;
      //   border-color: cyan;
      // }
      // a {
      //   // display: flex;
      //   // align-itens: center;
      //   // justify-content: center;
      //   border: solid 1px;
      //   border-radius: 10%;
      //   margin: 5px;
      //   text-decoration: none;
      // }
    `}
    </style>
  </div>
)
export default Menu
