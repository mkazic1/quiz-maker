import { Link } from 'react-router-dom';
import { Button, CardMedia, Box } from '@mui/material';
import ROUTES from '../constants/routes';
import quizPic from '../assets/quiz.png';
import { linkStyle, pageLayoutStyle } from '../style/CommonStyle';

const WelcomePage = () => (
  <Box sx={pageLayoutStyle}>
    <CardMedia
      image={quizPic}
      alt="Quiz intro"
      component="img"
      sx={{
        width: '30%',
        height: '30%',
      }}
    />
    <Link to={`${ROUTES.QUIZZES}`} style={linkStyle}>
      <Button variant="contained">START</Button>
    </Link>
  </Box>
);

export default WelcomePage;
