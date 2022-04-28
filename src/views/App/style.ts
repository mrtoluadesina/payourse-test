import styled from "styled-components";

export const ListAppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    font-size: 1.5rem;
    background-color: rgba(0, 179, 228, 0.1);
    width: 100%;
    height: 42px;
    margin: auto auto 12px;
    position: relative;

    p {
        color: rgb(0, 179, 228);
        font-weight: 500;
    }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
  overflow: auto;
`;
