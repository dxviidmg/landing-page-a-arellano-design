import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavBar } from "./components/navbar/CustomNavBar";
import CustomCard from "./components/card/Card";
import Inicio from "./components/sections/Inicio";
import Educacion from "./components/sections/educacion";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
          <CustomCard isFixed={true}></CustomCard>
          </Col>
          <Col md={8}>
            <Inicio></Inicio>
            <Educacion></Educacion>
          </Col>
        </Row>
        wefefw
      </Container>
      fdsfdsdfs
    </>
  );
}

export default App;
