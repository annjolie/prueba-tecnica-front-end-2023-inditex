import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${({ theme }) => theme.fonts.body};
  margin-block-start: 1.5rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-inline-start: 3rem;
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primary.gray400};
  padding: 16px;
  margin-block-start: 0rem;
`;
