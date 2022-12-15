import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import DetailTrip from "./component/DetailTrip";
import Login from "./component/Login";
import { useState } from "react";
import Register from "./component/Register";
import Payment from "./component/Payment";
import PrivateRoute from "./component/PrivateRoute";
import { trip, user, orderData } from "./DummyData";

function App() {
  const [tripData] = useState(trip);
  const [userData, setUserData] = useState(user);
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [order, setOrder] = useState(orderData);

  // console.log(tripData);
  // console.log(userData);
  // console.log(order);

  return (
    <>
      <NavBar setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} />
      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setRegisterForm={setRegisterForm}
        userData={userData}
      />
      <Register
        registerForm={registerForm}
        setRegisterForm={setRegisterForm}
        setLoginForm={setLoginForm}
        userData={userData}
        setUserData={setUserData}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Content tripData={tripData} />
            </>
          }
        />
        <Route
          path="/detail/:idTrip"
          element={
            <>
              <DetailTrip tripData={tripData} setOrder={setOrder} />
            </>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route
            path="/payment"
            element={
              <>
                <Payment
                  userData={userData}
                  tripData={tripData}
                  order={order}
                  setOrder={setOrder}
                />
              </>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
