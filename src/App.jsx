import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Providers from './providers';
import ROUTES from './constants/routes';
import WelcomePage from './pages/WelcomePage';
import QuizzesPage from './pages/QuizzesPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

const App = () => (
  <Providers>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route element={<Layout />}>
          <Route path={ROUTES.QUIZZES} element={<QuizzesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Providers>
);

export default App;
