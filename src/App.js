import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavBar } from "./components/navbar/CustomNavBar";
import CustomCard from "./components/card/Card";
import AboutMe from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container style={{ paddingTop: "50px", paddingBottom: '50px' }}>
        <Row>
          <Col md={4}>
            <CustomCard
              isFixed={true}
              title={"David Mejia"}
              subtitle={"Soy Full Stack Web Developer"}
              img={
                "https://png.pngtree.com/png-vector/20230728/ourlarge/pngtree-programmer-clipart-developer-sitting-behind-his-computer-in-glasses-cartoon-vector-png-image_6815441.png"
              }
              text={'"Cualquier tecnología suficientemente avanzada es indistinguible de la magia". -Arthur C. Clarke'}
            ></CustomCard>
          </Col>
          <Col md={8}>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
            <Contact></Contact>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
