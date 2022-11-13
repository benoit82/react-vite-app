import styled from 'styled-components';
import { Button } from './Button';

type ContainerProps = {
  bgColor?: string;
  textColor?: 'orange' | 'green';
};

export const Container = styled.div<ContainerProps>`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ bgColor, theme }) => bgColor || theme.primary};
  color: ${({ textColor, theme }) => textColor || theme.secondary};
  padding: 20px;
`;

export const NestedContainer = styled(Container)`
  background-color: #2b2b68;
  min-width: 0;
  min-height: 0;
  width: 30px;
  height: 30px;
  transition: background-color 500ms ease-in;
  &:hover {
    background-color: #6ea16e;
    & ${Button} {
      visibility: visible;
    }
  }
`;
