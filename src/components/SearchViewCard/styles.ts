import styled from 'styled-components';
import PodcastSearchViewImage from '../PodcastSearchViewImage';
import NextLink from 'next/link';

export const Container = styled(NextLink)`
  font-family: ${({ theme }) => theme.fonts.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  text-decoration: none;
`;

export const PodcastImage = styled(PodcastSearchViewImage)`
  z-index: 1;
`;

export const Wrapper = styled.div`
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primary.gray400};
  padding-inline: 1rem;
  padding-block: 2rem 0.5rem;
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primary.gray400};
  transform: translateY(-36px);
`;

export const Title = styled.h1`
  margin: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary.gray800};
`;

export const Author = styled.p`
  margin: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.primary.gray600};
`;
