import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fonts.body};
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-inline-end: 7rem;
    gap: 1rem;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary.white};
    font-size: 2.12rem;
    margin-block: 3rem;
`;

export const Label = styled.label`
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.primary.white};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-block: 1rem;
    background-color: ${({ theme }) => theme.colors.primary.info};
    padding-inline: 0.5rem;
    border-radius: 0.5rem;
`;
