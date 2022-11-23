import styled from 'styled-components';

type ContainerProps = {
  bgColor?: string;
  textColor?: 'orange' | 'green';
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ bgColor, theme }) => bgColor || theme.color.primary};
  color: ${({ textColor, theme }) => textColor || theme.color.secondary};
  padding: 20px;
`;
