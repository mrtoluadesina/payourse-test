import styled from "styled-components";
import { Colors } from "../../constants";

export const Btn = styled.button`
  border-radius: 10px;
  border: none;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.39;
  letter-spacing: normal;
  box-shadow: rgb(0 179 228 / 16%) 0px 2px 4px 0px;
  background-color: rgb(0, 179, 228);
  color: ${Colors.white};
  margin: 10px 0px 0px;
  width: 100%;
  text-align: center;
  padding: 13px 11px;
`;
