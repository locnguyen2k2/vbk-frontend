import { useAppDispatch } from '../../../hooks';
import { logout } from '../../../store/reduceres/user.slice';
import { Navigate } from 'react-router-dom';

export const Logout = () => {
  const dispatch = useAppDispatch();
  dispatch(logout());
  return <Navigate to="/login" replace />;
};