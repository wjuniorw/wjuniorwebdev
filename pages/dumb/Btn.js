import Link from "next/link";
import styled from "styled-components";

const Btn = (prop) => (
  <div>
    <Link href={prop.goto}>
      <StyledLink>{prop.children}</StyledLink>
    </Link>
  </div>
);

const StyledLink = styled.a`
  :active {
    background: cyan;
    color: navy;
    background: cyan;
    border-color: cyan;
  }
  :focus {
    background: cyan;
    color: navy;
    background: cyan;
    border-color: cyan;
  }
  :hover {
    background: cyan;
    color: navy;
    background: cyan;
    border-color: cyan;
  }
    color: cyan;
    padding: 5%;
    border: solid 1px;
    text-decoration: none;
    margin: 5px;
`
export default Btn;
