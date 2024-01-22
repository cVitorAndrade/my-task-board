import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.div`
    display: flex;
    align-items: center;

    gap: 2rem;

    > h2 {
        padding-right: 2rem;
        border-right: 2px solid ${ ({ theme }) => theme.COLORS.BLACK} ;
    }

    > p {
        font-size: 2rem;
        font-weight: 500;
    }

`;