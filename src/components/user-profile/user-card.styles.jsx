import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 1em;
  width: 25%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  height: 300px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-bottom: 1px solid #f3f3f3;
`;

export const TextContainer = styled.div`
  padding: 1em;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  padding: 1em;
  margin: 10px;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
  }
`;
