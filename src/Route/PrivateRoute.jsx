/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { Loading } from "../Components/Loading/Loading";
import { useAuth } from "../Contexts/AuthProvider";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <Loading></Loading>;

  if (user?.uid) {
    return children;
  }
  return <Navigate to='/login' replace />;
};
