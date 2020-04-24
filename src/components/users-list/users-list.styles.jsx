import styled from "styled-components";

export const UserListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
