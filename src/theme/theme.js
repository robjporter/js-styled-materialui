import { createMuiTheme } from '@material-ui/core/styles';
import { red , green } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    success: {
      main: green[500],
      light: green[100]
    },
    text: {
      success: green[500]
    }
  },
});

export default theme;