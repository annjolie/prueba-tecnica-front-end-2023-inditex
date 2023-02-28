import { from } from '../../styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primary.gray400};
  padding: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.md};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-block-end: 2rem;

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const Reproducer = styled.audio``;
