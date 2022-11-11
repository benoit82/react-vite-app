import styled from 'styled-components';

type ContainerProps = {
  bgColor?: string;
  textColor?: 'orange' | 'green';
}

export const Container = styled.div<ContainerProps>`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${ ({ bgColor, theme }) => bgColor || theme.primary };
  color: ${({ textColor }) => textColor || 'black'};
  padding: 20px;
  color: #7a63b9;
`
