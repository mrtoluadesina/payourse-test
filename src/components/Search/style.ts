import styled from "styled-components";
import { Colors } from "../../constants";

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;
  width: 100%;
  position: relative;
  min-height: 55px;
  height: 55px;
  border-radius: 5px;
  background-color: ${Colors.white};
  border: 1px solid rgba(112, 112, 112, 0.25);

  input {
    font-size: 1.25rem;
  }
`;
