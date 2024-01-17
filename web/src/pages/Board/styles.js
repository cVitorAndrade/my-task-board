import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

`;

export const Content = styled.main`
    width: min(90%, 53rem);
    margin: auto;
`;

export const Header = styled.header`
    display: flex;
    align-items: start;
    gap: 1.2rem;
    padding: 4rem 0;

    
    .title {
        color: ${ ({ theme }) => theme.COLORS.BLACK};
        h1 {
            font-size: 4rem;
            font-weight: 400;
            margin-bottom: 1rem;
        }
    }

`;