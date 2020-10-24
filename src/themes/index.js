import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#001A33',
      dark: '#001A33',
      light: '#001A33',
    },
    secondary: {
      main: '#FFA500',
      dark: '#FFA500',
      light: '#FFA500',
    },
    text: {
      primary: '#fff',
      secondary: '#c4c4c4',
    },
  },
});

export default MainTheme;
