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
        h1 {
            font-size: 4rem;
            font-weight: 400;
            margin-bottom: 1rem;

            img {
                margin-left: 1.2rem;
            }
        }
    }

`;

export const TaskWrrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const NewTask = styled.button`
    width: 100%;
    padding: 1.8rem;
    margin-top: 2.4rem;
    background-color: ${ ({ theme }) => theme
    .COLORS.BEIGE};

    display: flex;
    align-items: center;
    gap: 1.5rem;

    border: none;
    border-radius: 1.6rem;

    font-size: 1.6rem;
    font-weight: 600;

    transition: filter .2s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    .icon {
        padding: 1.2rem;
        border-radius: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${ ({ theme }) => theme.COLORS.YELLOW_DARK};
        
        img {
            width: 2.6rem;
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, .25);
    overflow: hidden;

    display: flex;
    justify-content: end;
    align-items: stretch;
    padding: 1.2rem;
`;