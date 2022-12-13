import React from "react";

import { Chart as ChartJS } from "chart.js/auto";

import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

import {
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";

import "../Chart.css";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 39, 3, 5, 20, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <Container>
      <Row>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <Radar data={data} />;<Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <Radar data={data} />;<Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <Radar data={data} />;<Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <Radar data={data} />;<Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <Radar data={data} />;<Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <Radar data={data} />;<Button>Go somewhere</Button>
          </Card>
        </Col>


      </Row>
    </Container>
  );
}
