import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/Errorpage';
import { CentersPage } from './pages/Centerspage';
import { CenterDetail } from './pages/Centerspage/Centerdetail';

const App = () => {
  const location = useLocation();
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Dětský koutek</h1>
      </header>
      <main>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <span> | </span>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          O nás
        </NavLink>
        <span> | </span>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact
        </NavLink>
        <span> | </span>
        <NavLink
          to="/centerspage"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Pobočky
        </NavLink>
        {location.pathname === '/' ? <Home /> : <Outlet />}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'centerspage',
        element: <CentersPage />,
        children: [{ path: '/centerspage/:id', element: <CenterDetail /> }],
      },
    ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
