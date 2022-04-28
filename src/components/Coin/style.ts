import styled from "styled-components";

export const CoinWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    min-width: 280px;
`;

export const Crypto = styled.h2`
    font-size: 1.5rem;
`;

export const Rate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
        font-size: 0.725rem;
        color: rgb(0, 179, 228);
    }

    p {
        font-size: 1.25rem;
    }
`;