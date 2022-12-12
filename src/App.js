import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Header></Header>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
