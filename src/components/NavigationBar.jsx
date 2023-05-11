import {
  AppBar,
  Toolbar,
  Container,
  CardMedia,
  Typography,
  Box,
} from '@mui/material';
import LogoPath from '../assets/lightbulb2.png';
import {
  appBarStyle,
  containerStyle,
  cardMediaStyle,
  navigationTitleStyle,
} from '../style/NavigationBarStyle';

const NavigationBar = () => (
  <AppBar position="fixed" sx={appBarStyle}>
    <Container maxWidth="false" style={containerStyle}>
      <Box>
        <Toolbar variant="dense">
          <CardMedia
            image={LogoPath}
            alt="LogoImage"
            component="img"
            sx={cardMediaStyle}
          />
          <Typography
            variant="h4"
            component="h4"
            sx={navigationTitleStyle}
          >
            QUIZ MAKER
          </Typography>
        </Toolbar>
      </Box>
    </Container>
  </AppBar>
);

export default NavigationBar;
