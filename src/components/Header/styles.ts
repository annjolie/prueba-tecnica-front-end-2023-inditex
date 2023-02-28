import styled from 'styled-components';
import { from } from '../../styles/utils/responsive';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-block-end: 2px solid ${({ theme }) => theme.colors.primary.info3};
  a {
    text-decoration: none;
  }
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.primary.dark};

  ${from.tabletPortrait} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;