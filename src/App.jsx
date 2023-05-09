import { CardMedia } from '@mui/material';
import quizPic from './assets/quiz.png';

const App = () => (
  <CardMedia
    image={quizPic}
    alt="Quiz intro"
    component="img"
    sx={{
      width: '100%',
      height: '100vh',
    }}
  />
);

export default App;
