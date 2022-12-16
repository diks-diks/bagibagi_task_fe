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
import UserPrivateRoute from "./component/UserPrivateRoute";
import { trip, user, orderData } from "./DummyData";
import Profile from "./component/Profile";
import ListTransaction from "./component/ListTransaction";
import AdminPrivateRoute from "./component/AdminPrivateRoute";
import IncomeTrip from "./component/IncomeTrip";
import AddTrip from "./component/AddTrip";

function App() {
  const [tripData, setTripData] = useState(trip);
  const [userData, setUserData] = useState(user);
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [order, setOrder] = useState(orderData);

  // console.log(tripData);
  // console.log(userData);
  // console.log(order);

  return (
    <>
      <NavBar
        setLoginForm={setLoginForm}
        setRegisterForm={setRegisterForm}
        userData={userData}
      />
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
        <Route element={<UserPrivateRoute userData={userData} />}>
          <Route
            path="/payment"
            element={
              <Payment
                userData={userData}
                tripData={tripData}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                userData={userData}
                tripData={tripData}
                order={order}
                setUserData={setUserData}
              />
            }
          />
        </Route>
        <Route element={<AdminPrivateRoute userData={userData} />}>
          <Route
            path="/transactions"
            element={
              <ListTransaction
                order={order}
                userData={userData}
                tripData={tripData}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/trip"
            element={
              <IncomeTrip
                order={order}
                userData={userData}
                tripData={tripData}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/addtrip"
            element={<AddTrip tripData={tripData} setTripData={setTripData} />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
