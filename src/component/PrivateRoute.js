import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <>{localStorage.getItem("isLogin") ? <Outlet /> : <Navigate to="/" />}</>
  );
};
export default PrivateRoute;
