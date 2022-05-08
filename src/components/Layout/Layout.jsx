import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

function Layout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default Layout;
