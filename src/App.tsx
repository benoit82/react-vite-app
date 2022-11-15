import { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  APITestContainer,
  Button,
  Container,
  NestedContainer,
  Title,
} from '@components/index';
import { darkTheme, lightTheme } from '@themes/index';
import useGetStore from 'hooks/useGetStore';

const App: FC = () => {
  const { darkThemeStatus, count, fakeData, toggleTheme, getFakeData } =
    useGetStore();

  useEffect(() => {
    getFakeData();
  }, []);

  return (
    <ThemeProvider theme={darkThemeStatus ? darkTheme : lightTheme}>
      <Container textColor="green">
        <APITestContainer>
          <Title>{fakeData}</Title>
          <Button onClick={getFakeData}>Get a random lorem title</Button>
        </APITestContainer>
        <p>
          switch theme counter : <span>{count}</span>
        </p>
        <NestedContainer>
          <Button onClick={toggleTheme}>switch theme</Button>
        </NestedContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
