import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import DetailTrip from "./component/DetailTrip";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Content />
            </>
          }
        />
        <Route
          path="/detail"
          element={
            <>
              <DetailTrip />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
