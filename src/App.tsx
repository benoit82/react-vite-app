import { FC, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { APISection, Container, SwitchThemeSection } from '@components/index';
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
        <APISection />
        <SwitchThemeSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
