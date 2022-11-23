import { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  APISection,
  CatchPhrase,
  Container,
  SwitchThemeSection,
  Title,
} from '@components/index';
import { darkTheme, lightTheme } from '@themes/index';
import useGetStore from 'hooks/useGetStore';

const App: FC = () => {
  const { darkThemeStatus, getFakeData } = useGetStore();

  useEffect(() => {
    getFakeData();
  }, []);

  return (
    <ThemeProvider theme={darkThemeStatus ? darkTheme : lightTheme}>
      <Container textColor="green">
        <Title className="testClass">
          Welcome to the new pulsar version APP3
        </Title>
        <CatchPhrase dataId={9}>new feature : the theme switcher !</CatchPhrase>
        <APISection />
        <SwitchThemeSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
