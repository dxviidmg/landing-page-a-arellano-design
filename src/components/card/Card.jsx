import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'

import UseWindowDimensions from '../useWindowDimensions/useWindowDimensions';

function CustomCard({isFixed=false}) {
    const { width } = UseWindowDimensions();

    const isMdOrLarger = width >= 768

    return (

    

        <Card className={` ${isFixed && isMdOrLarger ? ' fixed-card' : ''}`}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>David Mejia</Card.Title>
        <Card.Title>Full Stack web Developer</Card.Title>
        <Card.Text>
        Cualquier tecnología suficientemente avanzada es indistinguible de la magia.
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default CustomCard;