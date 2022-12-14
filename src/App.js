import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import DetailTrip from "./component/DetailTrip";
import Login from "./component/Login";
import dewetourData from "./DummyData";
import { useState } from "react";
import Register from "./component/Register";

function App() {
  const [tripData] = useState(dewetourData);
  const [userData, setUserData] = useState([
    {
      fullname: "Ahmad Sidik Rudini",
      email: "sidik@mail.com",
      password: "Admin123",
      phone: "087711356758",
      address: "Kota Bogor",
    },
  ]);
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);

  // console.log(userData);

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
              <Content data={tripData} />
            </>
          }
        />
        <Route
          path="/detail/:idTrip"
          element={
            <>
              <DetailTrip data={tripData} />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
