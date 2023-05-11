import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Layout = () => (
  <div>
    <NavigationBar />
    <Outlet />
  </div>
);

export default Layout;
