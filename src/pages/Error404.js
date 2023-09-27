import styled from "styled-components"


export default function Error404() {

  return (
    <ErrorContainer>
        <p>error 404</p>     
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

