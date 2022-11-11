import styled from 'styled-components';

type ContainerProps = {
  bgColor: string;
}

export const Container = styled.div<ContainerProps>`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${ ({ bgColor }) => bgColor || '#d2d2d2'};
  padding: 20px;
`
