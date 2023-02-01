import { Navigate , Route, Routes } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
   <Routes> <Route {...rest}>{(props) => <Element {...props} />}</Route></Routes>
  ) : (
    <Navigate  to="/login" />
  );
}