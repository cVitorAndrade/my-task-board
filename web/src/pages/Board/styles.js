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

    &.none {
        display: none !important;
    }
`;

export const TaskDetails = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #ffffff;

    width: 50%;

    border-radius: 1.6rem;

    padding: 2rem;
`;

export const TaskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
        font-size: 2rem;
        font-weight: 600;
    }

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: 1px solid ${ ({ theme }) => theme.COLORS.BLUE_LIGHT};
        border-radius: 1rem;

        padding: .8rem;

        background: none;

        transition: background .2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    

        &:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, .1);
        }
    }
`;

export const TaskName = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    
    margin: 2.2rem 0 2rem;
    
    > label {
        font-size: 1.2rem;
        font-weight: 500;

        color: ${ ({ theme }) => theme.COLORS.GRAY};
    }

    > input {
        font-size: 1.6rem;
        color: ${ ({ theme }) => theme.COLORS.BLACK};

        padding: 1.2rem;
        border-radius: 1rem;

        border: 2px solid ${ ({ theme }) => theme.COLORS.BLUE_LIGHT};

        
        &:focus {
            outline: none;
            border: 2px solid ${ ({ theme }) => theme.COLORS.BLUE_DARK};
        }

        &::placeholder {
            font-size: 1.5rem;
            font-weight: 300;
            color: ${ ({ theme }) => theme.COLORS.GRAY};            
        }
    }

`;

export const TaskDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    > label {
        font-size: 1.2rem;
        font-weight: 500;

        color: ${ ({ theme }) => theme.COLORS.GRAY};
    }

    > textarea {
        height: 20rem;
        resize: none;

        font-size: 1.6rem;
        color: ${ ({ theme }) => theme.COLORS.BLACK};

        padding: 1.2rem;

        border-radius: 1rem;

        border: 2px solid ${ ({ theme }) => theme.COLORS.BLUE_LIGHT};

        &:focus {
            outline: none;
            border: 2px solid ${ ({ theme }) => theme.COLORS.BLUE_DARK};
        }

        &::placeholder {
            font-size: 1.5rem;
            font-weight: 300;
            color: ${ ({ theme }) => theme.COLORS.GRAY};            
        }
    }
`;

export const TaskIcon = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    margin: 2rem 0;

    > label {
        font-size: 1.2rem;
        font-weight: 500;

        color: ${ ({ theme }) => theme.COLORS.GRAY};
    }

    > div {
        display: flex;
        gap: 1rem;
    }
`;

export const Icon = styled.div`
    background-color: ${ ({ theme }) => theme.COLORS.BLUE_LIGHT};
    font-size: 2.2rem;

    padding: 1.2rem;
    border-radius: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter .2s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &.selected {
        background-color: ${ ({ theme }) => theme.COLORS.YELLOW_LIGHT};
    }

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }


`;

export const TaskStatus = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 1rem;
    }

    > label {
        font-size: 1.2rem;
        font-weight: 500;

        color: ${ ({ theme }) => theme.COLORS.GRAY};
    }
`;

export const Status = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 2px 1rem 2px 2px;
    border: 2px solid ${ ({ theme }) => theme.COLORS.BLUE_LIGHT};
    
    width: 49%;
    
    border-radius: 1.4rem;
    
    > svg {
        padding: 2px;
        background-color: ${ ({ theme }) => theme.COLORS.BLUE_DARK};
        color: #ffffff;
        border-radius: 50%;
    }

    &.selected {
        border: 2px solid ${ ({ theme }) => theme.COLORS.BLUE_DARK};
    }
    
    > div {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        h3 {
            font-weight: 500;
            font-size: 1.5rem;
            color: ${ ({ theme }) => theme.COLORS.BLACK}
        }
    }

`;

export const StatusIcon = styled.div`
    padding: 1.2rem;
    border-radius: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &.in-progress {
        background-color: ${ ({ theme }) => theme.COLORS.YELLOW_DARK};
    }

    &.completed {
        background-color: ${ ({ theme }) => theme.COLORS.GREEN_DARK};
    }

    &.not-do {
        background-color: ${ ({ theme }) => theme.COLORS.RED_DARK};
    }

    > img {
       width: 2.4rem;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;

    gap: 1.6rem;

    flex: 1;

    justify-content: end;
    align-items: end;

    button:first-child {
        background-color: ${ ({ theme }) => theme.COLORS.GRAY};
    }
`

export const Button = styled.button`
    display: flex;
    gap: .7rem;

    background-color: ${ ({ theme }) => theme.COLORS.BLUE_DARK};

    border: none;
    border-radius: 9999px;

    padding: 1rem 3rem;

    color: #ffffff;
    font-weight: 500;
    font-size: 1.4rem;

    transition: filter .2s cubic-bezier(0.55, 0.055, 0.675, 0.19);


    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

`;