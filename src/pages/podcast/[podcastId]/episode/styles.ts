import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: ${({ theme }) => theme.fonts.body};
    margin-block-start: 1.5rem;

`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 6rem;
`;

