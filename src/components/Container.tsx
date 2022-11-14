import styled from 'styled-components';

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
