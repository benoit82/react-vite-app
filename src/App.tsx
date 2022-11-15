import { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  APITestContainer,
  Button,
  Container,
  NestedContainer,
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
          {fakeData && <p>DATA from API: {fakeData}</p>}
          <Button onClick={getFakeData}>Get data</Button>
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
