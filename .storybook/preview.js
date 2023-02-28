import { ThemeProvider } from 'styled-components';
import themes from '../src/styles/theme';
import GlobalStyle from '../src/styles/global';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#221F1F',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      {Story()}
    </ThemeProvider>
  ),
];
