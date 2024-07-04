import React, { useEffect, useState } from "react";
import CustomCard from "../card/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContentCard = ({title, md=4, data}) => {




  return (
    <div>
      <h1>{title}</h1>
      <Row>
        {data.map((element) => (
          <Col md={md}>
            <CustomCard title={element.title} subtitle={element.subtitle} img={element.img} text={element.text}></CustomCard>{" "}
          </Col>
        ))}
      </Row>{" "}
    </div>
  );
};

export default ContentCard;
