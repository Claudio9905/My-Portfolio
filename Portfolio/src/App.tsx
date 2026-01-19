import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profilo from "./components/Profilo";
import Progetti from "./components/Progetti";
import Contatti from "./components/Contatti";
import Intro from "./components/Intro";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container id="container-main">
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/profile" element={<Profilo />}></Route>
            <Route path="/progetti" element={<Progetti />}></Route>
            <Route path="/contatti" element={<Contatti />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
