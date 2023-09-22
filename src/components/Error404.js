import styled from "styled-components"
import img404 from "../images/Error.png"

export default function Error404() {

  return (
    <ErrorContainer>
        <ImageError src={img404} alt="error-pokemon"></ImageError>      
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const ImageError = styled.img`
width: 500px;
margin-top: 200px;
`;

 