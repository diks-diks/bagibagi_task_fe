import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Content />
      <Footer></Footer>
    </>
  );
}

export default App;
