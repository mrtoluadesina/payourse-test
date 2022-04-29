import styled from 'styled-components';
import { Colors } from '../../constants';

export const CardDiv = styled.div`
  background: ${Colors.white};
  max-width: 450px;
  min-width: 280px;
  height: calc(100vh - 80px);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 16%) 0px 2px 5px 0px;
  padding: 27px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media (min-width: 320px) {
    min-width: 300px;
  }
  @media (min-width: 425px) {
    min-width: 400px;
  }
  @media (min-width: 768px) {
    min-width: 450px;
  }
`;
