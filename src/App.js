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
import Skills from "./components/sections/skills";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
          <CustomCard isFixed={true} title={'David Mejia'} subtitle={'Full Stack'} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXCaI3sS-7XvMtZvdbSuVjDd6zlSYNbU-HDCF6bZl6Gq1jSNIV2VDOQ8DAxAe11VsJDA&usqp=CAU'} text={'Se el mejor'}></CustomCard>
          </Col>
          <Col md={8}>
            <Inicio></Inicio>
            <Educacion></Educacion>
            <Skills></Skills>
            <Contact></Contact>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
