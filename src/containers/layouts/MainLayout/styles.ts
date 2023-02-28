import styled from 'styled-components';
import MenuHeaderComponent from '@/components/MenuHeader';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutral800};
`;

export const MenuHeader = styled(MenuHeaderComponent)`
  width: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0px 30px 0px 12px;
`;

export const Content = styled.main`
  width: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 10px 30px;
  background-color: ${({ theme }) => theme.colors.neutral800};
`;
