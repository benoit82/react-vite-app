import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '@components/Button';
import { Container, NestedContainer } from '@components/Container';
import { useStore } from '@store/mainStore';
import { darkTheme, lightTheme } from '@themes/index';

const App: FC = () => {
  const { darkThemeStatus, count, toggleTheme } = useStore((state) => state);

  return (
    <ThemeProvider theme={darkThemeStatus ? darkTheme : lightTheme}>
      <Container textColor="green">
        <p>
          count : <span>{count}</span>
        </p>
        <NestedContainer>
          <Button onClick={() => toggleTheme()}>switch theme</Button>
        </NestedContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
