import { FC } from 'react'
import { CustomTheme, ThemeProvider } from 'styled-components'
import { Button } from './components/Button';
import { Container, NestedContainer } from './components/Container'
import { useStore } from './store/mainStore';

const App: FC = () => {
  const { darkThemeStatus, count, toggleTheme } = useStore((state) => state);

  const darkTheme: CustomTheme = {
    primary: '#242424',
    secondary: '#d5d5d5',
  }

  const theme: CustomTheme = {
    primary: '#dfdfdf',
    secondary: '#060d07',
  }

  return (
    <ThemeProvider theme={darkThemeStatus ? darkTheme : theme }>
      <Container textColor='green' >
        <p>count : <span>{count}</span></p>
        <NestedContainer>
          <Button onClick={() => toggleTheme()}>switch theme</Button>
        </NestedContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App
