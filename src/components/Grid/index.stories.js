import React from "react";
import Grid, { Row, Col } from ".";

import Input from "../Input";
import Button from "../Button";

const colStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "#fafafa"
};

export default {
  title: "design system|Grid",
  component: Grid,
  subcomponents: { Row, Col }
};

export const basic = () => (
  <Row>
    <Col style={colStyle}>col-1</Col>
    <Col style={colStyle}>col-2</Col>
    <Col style={colStyle}>col-3</Col>
    <Col style={colStyle}>col-4</Col>
  </Row>
);

export const columnAuto = () => (
  <Row>
    <Col auto style={colStyle}>
      col auto
    </Col>
    <Col style={colStyle}>1</Col>
    <Col style={colStyle}>2</Col>
    <Col style={colStyle}>3</Col>
  </Row>
);

export const withComponent = () => (
  <Row>
    <Col>
      <Input placeholder="검색" block />
    </Col>
    <Col auto>
      <Button block>검색</Button>
    </Col>
  </Row>
);
