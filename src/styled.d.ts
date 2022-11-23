import 'styled-components';

declare module 'styled-components' {
  export interface CustomTheme {
    color: {
      primary: string;
      secondary: string;
    };
  }
}
