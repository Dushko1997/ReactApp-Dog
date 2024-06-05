import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom';

type Props = {
  component: React.ComponentType
  token: string| null;
}

export const ProtectedRoute = ({ component : RouteComponent, token } : Props) => {
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <RouteComponent />;
};