import { Navigate, Outlet } from "react-router-dom";
import { useRef } from "react";

const AdminPrivateRoute = ({ userData }) => {
  const user = useRef(
    userData?.filter((user) => {
      return user.userId === parseInt(localStorage.getItem("loginUser"));
    })[0]
  );

  return (
    <>{user.current.role === "admin" ? <Outlet /> : <Navigate to="/" />}</>
  );
};
export default AdminPrivateRoute;
