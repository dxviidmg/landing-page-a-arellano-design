import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavBar } from "./components/navbar/CustomNavBar";
import BasicExample from "./components/card/Card";
import Inicio from "./components/sections/Inicio";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4} style={{backgroundColor: ''}}>
          <BasicExample></BasicExample>
          </Col>
          <Col md={8}>
            <Inicio></Inicio>
            <Inicio></Inicio>
            <Inicio></Inicio>
          </Col>
        </Row>
        wefefw
      </Container>
      fdsfdsdfs
    </>
  );
}

export default App;
