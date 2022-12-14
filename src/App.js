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
  const [data] = useState(dewetourData);
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);

  return (
    <>
      <NavBar setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} />
      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setRegisterForm={setRegisterForm}
      />
      <Register registerForm={registerForm} setRegisterForm={setRegisterForm} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Content data={data} />
            </>
          }
        />
        <Route
          path="/detail/:idTrip"
          element={
            <>
              <DetailTrip data={data} />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
