import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary.white};
    font-size: 2.12rem;
    margin-block: 3rem;
`;
