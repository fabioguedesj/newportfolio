import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      blueWhite: string;
      darkPurple: string;
      lightPurple: string;
      cyan: string;
      lightGray: string;
      darkGray: string;
    };
    borderRadius: string;
  }
}
