import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchContainer = styled.div``;

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary.white};
    font-size: 2.12rem;
    margin-block: 3rem;
`;

export const Label = styled.label`
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary.white};
    font-size: 1.5rem;
    margin-block: 1rem;
    background-color: ${({ theme }) => theme.colors.primary.info};
`;
