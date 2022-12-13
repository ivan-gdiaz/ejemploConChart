import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";

function EjemploCards1(props) {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card>
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
        {/* 
                    <Col lg="3" md="4" sm="6" xs="12">
                        <Card body>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>
                                Go somewhere
                            </Button>
                        </Card>
                    </Col> */}
      </Row>
    </Container>
  );
}

export default EjemploCards1;
