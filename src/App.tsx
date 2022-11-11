import { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from './components/Container'


const App: FC = () => {
  const activeDarkMode = true;

  const darkTheme = {
    primary: '#242424',
    secondary: '#d5d5d5',
  }

  const theme = {
    primary: '#dfdfdf',
    secondary: '#060d07',
  }

  return (
    <ThemeProvider theme={activeDarkMode ? darkTheme : theme }>
      <Container textColor='orange' >
        <p>Test :p</p>
      </Container>
    </ThemeProvider>
  )
}

export default App
