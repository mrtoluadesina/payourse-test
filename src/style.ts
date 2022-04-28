import styled from 'styled-components';
import { Colors } from './constants';

export const AppContainer = styled.div`
    background-color: ${Colors.lightBlue};
    height: 100vh;
    padding: 10px;

    .container {
        max-width: 980px;
        min-height: calc(100vh - 20px);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .content {
            display: none;
        }
    }
    
    @media (min-width: 768px) {
        .container {
            flex-direction: row;
            justify-content: space-between;

            .content {
                display: flex;
                flex: 0 0 50%;
            }
        }
    }
`;