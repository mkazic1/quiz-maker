import { createTheme, responsiveFontSizes } from '@mui/material';

const PRIMARY = {
  main: '#F0437B',
};

const SECONDARY = {
  main: '#FFFFFF',
  dark: '#B0AFAC',
};

const THIRD = {
  main: '#F9DE11',
};

const mainFont = "'Lato', sans-serif";

const theme = createTheme({
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    third: THIRD,
    text: {
      primary: PRIMARY.main,
      secondary: SECONDARY.main,
      third: THIRD.main,
    },
  },

  typography: {
    fontFamily: mainFont,
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '1.95px',
            color: PRIMARY.light,
            backgroundColor: SECONDARY.light,
            border: '0px',
            borderRadius: '6px',
            boxShadow: 'none',
            opacity: 1,
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingTop: '15px',
            paddingBottom: '15px',
            '&:hover': {
              backgroundColor: SECONDARY.main,
              border: '0px',
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '1.95px',
            color: SECONDARY.main,
            backgroundColor: PRIMARY.light,
            border: '0px',
            borderRadius: '6px',
            boxShadow: 'none',
            opacity: 1,
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingTop: '15px',
            paddingBottom: '15px',
            '&:hover': {
              backgroundColor: PRIMARY.main,
              border: '0px',
              boxShadow: 'none',
            },
          },
        },
      ],
    },
  },
});

const responsiveFontTheme = responsiveFontSizes(theme);
export default responsiveFontTheme;
