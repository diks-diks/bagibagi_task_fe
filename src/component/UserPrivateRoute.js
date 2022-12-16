import { Navigate, Outlet } from "react-router-dom";
import { useRef } from "react";

const UserPrivateRoute = ({ userData }) => {
  const user = useRef(
    userData?.filter((user) => {
      return user.userId === parseInt(localStorage.getItem("loginUser"));
    })[0]
  );

  return (
    <>
      {localStorage.getItem("isLogin") && user.current.role === "user" ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
export default UserPrivateRoute;
