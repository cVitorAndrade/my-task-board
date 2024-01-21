import styled from "styled-components";

export const Container = styled.div`
    padding: 1.8rem;
    border-radius: 1.6rem;

    background-color: ${ ({ theme }) => theme.COLORS.BLUE_LIGHT};

    display: flex;
    justify-content: space-between;

    transition: filter .2s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    &.in-progress {
        background-color: ${ ({ theme }) => theme.COLORS.YELLOW_LIGHT};
        
        .status {
            background-color: ${ ({ theme }) => theme.COLORS.YELLOW_DARK};

        }
    }
    
    &.completed {
        background-color: ${ ({ theme }) => theme.COLORS.GREEN_LIGHT};

        .status {
            background-color: ${ ({ theme }) => theme.COLORS.GREEN_DARK};

        }
    }
    
    &.not-do {
        background-color: ${ ({ theme }) => theme.COLORS.RED_LIGHT};

        .status {
            background-color: ${ ({ theme }) => theme.COLORS.RED_DARK};

        }
    }

    > div:first-child {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        h2 {
            font-size: 2rem;
            font-size: 600;
            margin: .6rem 0;
        }

        p {
            font-weight: 300;
            color: ${ ({ theme }) => theme.COLORS.BLACK};
            max-width: 80%;
        }
    }

    .icon,
    .status {
        padding: 1.2rem;
        border-radius: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
    }

    .icon {
        background-color: ${ ({ theme }) => theme.COLORS.WHITE};
        align-self: flex-start;
        font-size: 2.2rem;
    }

    .status {
        img {
            width: 2.4rem;
        }
    }

`;