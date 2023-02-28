import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primary.gray400};
  padding: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  max-width: 200px;
`;

export const PodcastImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
  display: block;
  margin: 0 auto 1.5rem auto;
`;

export const Wrapper = styled.div`
border-block-start: 1px solid ${({ theme }) => theme.colors.primary.gray400};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const Author = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Description = styled.p`
  word-break: break-word;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
