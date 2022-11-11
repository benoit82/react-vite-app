import { FC } from 'react'
import { CustomTheme, ThemeProvider } from 'styled-components'
import { Container } from './components/Container'

const App: FC = () => {
  const activeDarkMode = true;

  const darkTheme: CustomTheme = {
    primary: '#242424',
    secondary: '#d5d5d5',
  }

  const theme: CustomTheme = {
    primary: '#dfdfdf',
    secondary: '#060d07',
  }

  return (
    <ThemeProvider theme={activeDarkMode ? darkTheme : theme }>
      <Container textColor='green' >
        <p>Test :p</p>
      </Container>
    </ThemeProvider>
  )
}

export default App
