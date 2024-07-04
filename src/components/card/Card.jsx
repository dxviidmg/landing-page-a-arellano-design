import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./card.css";

import UseWindowDimensions from "../useWindowDimensions/useWindowDimensions";

function CustomCard({ title, subtitle, text, img, isFixed = false }) {
  const { width } = UseWindowDimensions();

  const isMdOrLarger = width >= 768;

  return (
    <Card className={`text-center ${isFixed && isMdOrLarger ? " fixed-card" : ""}`}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{subtitle}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
