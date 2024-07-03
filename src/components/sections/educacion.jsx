import React from 'react'
import CustomCard from '../card/Card'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Educacion = () => {

    const grades = [{'grade': 'ITIC'}, {'grade': 'ITIC'}]
  return (
    <div>
        Educacion
        <Row>
        <Col md={6}>
        {grades.map(grade => (<CustomCard></CustomCard>))}
        w
    </Col>   
    </Row>   d
    </div>
  )
}

export default Educacion
