import styled from "styled-components"
import logo from "../pngegg(123).png"



export default function Welcome(props) {

  const { reqApi } = props;


  return (
    <ContentLogo>
      <WelcomeText>Pincha para ver diferentes pokemones</WelcomeText>
      <ImageLogo src={logo} alt="simpson-family" onClick={reqApi
      }></ImageLogo>
    </ContentLogo>
  );
};


const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageLogo = styled.img`
  width:350px;
  height: auto;
  &:hover{
    cursor:pointer;
  }
  `;

const WelcomeText = styled.p`
  color: #264653;
  text-align:center;
  font-weight: 600;
  padding: 50px 0 10px 0;
  font-size:25px;
  `;

