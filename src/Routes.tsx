import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { useAppSelector } from './hooks';

import Login from './components/Pages/Auth/Login';
import Register from './components/Pages/Auth/Register';
import NotFound from './components/Templates/NotFound';
import BaseLayout from './components/Templates/BaseLayout';
import BaseHorizontalLayout from './components/Templates/BaseHorizontalLayout';
import { Logout } from './components/Pages/Auth/Logout';
import BaseHomePage from './components/Pages/Dashboards/BaseHomePage';
import ListMovie from './components/Pages/Movies/ListMovies';
import { ListMovieCategories } from './components/Pages/MovieCategories/ListMovieCategories';
import ListSchedule from './components/Pages/Schedules/ListSchedule';
import ListPerson from './components/Pages/Persons/ListPerson';
import ListShowTimes from './components/Pages/ShowTimes/ListShowTimes';
import ListTheater from './components/Pages/Theaters/ListTheater';
import ListSeat from './components/Pages/Seats/ListSeat';
import ListSector from './components/Pages/Sectors/ListSector';
import ListRow from './components/Pages/Rows/ListRows';
import { Profile } from './components/Pages/System/Account/Profile';
import { ChangePasswordForm } from './components/Organisms/Forms/Accounts/ChangePasswordForm';

const routeTypes = {
  main: 'main', base: 'base',
} as const;

const Routers = () => {
  const location = useLocation();
  const pathName = `/${location.pathname.split('/')[1]}`;
  const user = useAppSelector((state) => state.user);

  const authRoutes = ['/login', '/register', '/forgot'];
  const baseRoutes = ['/login', '/register', '/forgot', '/notfound'];
  const mainRoutes = [
    '/',
    '/logout',
    '/carts',
    '/listPerson',
    '/productCategories',
    '/products',
    '/seats',
    '/schedules',
    '/theaters',
    '/showTimes',
    '/sectors',
    '/rows',
    '/profile',
    '/updateProfile',
    '/campaign',
    '/about',
    '/changePassword',
    '/historyPayment',
    '/logout',
  ];

  const isBaseRoute = baseRoutes.includes(pathName);
  const isAuthRoute = authRoutes.includes(pathName);
  const isMainRoute = mainRoutes.includes(pathName);

  if (isAuthRoute && user.isAuthenticated) return <Navigate to="/" state={{ from: location }} replace />;

  const routes = {
    [routeTypes.base]: () => (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<h1>Forgot</h1>} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/login" state={{ from: location }} replace />} />
        </Routes>
      </Suspense>
    ), [routeTypes.main]: () => (
      <Suspense fallback={<div>Loading...</div>}>
        {user.isAuthenticated ? (<Routes>
          <Route path="/" element={<BaseHomePage />} />
          <Route path="/carts" element={<h1>Carts</h1>} />
          <Route path="/products" element={<ListMovie />} />
          <Route path="/productCategories" element={<ListMovieCategories />} />
          <Route path="/schedules" element={<ListSchedule />} />
          <Route path="/theaters" element={<ListTheater />} />
          <Route path="/showTimes" element={<ListShowTimes />} />
          <Route path="/listPerson" element={<ListPerson />} />
          <Route path="/sectors" element={<ListSector />} />
          <Route path="/seats" element={<ListSeat />} />
          <Route path="/rows" element={<ListRow />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/updateProfile" element={<h1>updateProfile</h1>} />
          <Route path="/changePassword" element={<ChangePasswordForm />} />
          <Route path="/historyPayment" element={<h1>historyPayment</h1>} />
          <Route path="/logout" element={<Logout />} />
        </Routes>) : (<Navigate to="/login" state={{ from: location }} replace />)}
      </Suspense>
    ),
  };

  return isBaseRoute || !user.isAuthenticated ? (
    <BaseLayout>{routes[routeTypes.base]()}</BaseLayout>) : isMainRoute ?
    <BaseHorizontalLayout>{routes[routeTypes.main]()}</BaseHorizontalLayout> :
    <Navigate to="/notfound" state={{ from: location }} replace />;
};

export default Routers;
