import React from "react";
import Button, { ButtonGroup } from ".";

export default {
  title: "Button",
  component: Button,
  subcomponents: { ButtonGroup }
};

export const size = () => (
  <>
    <h2>Single</h2>
    <Button>Normal</Button>
    <Button sm>Small</Button>
    <Button block>Block</Button>

    <h2>Button Group</h2>
    <ButtonGroup>
      <Button>A</Button>
      <Button>B</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="radio" name="a">A</Button>
      <Button type="radio" name="a">B</Button>
    </ButtonGroup>
    <ButtonGroup block>
      <Button>A</Button>
      <Button>B</Button>
    </ButtonGroup>
    <ButtonGroup block>
      <Button type="radio" name="b" checked>A</Button>
      <Button type="radio" name="b">B</Button>
    </ButtonGroup>
  </>
);

export const block = () => (
  <>
    <Button block>Block</Button>
  </>
);

export const style = () => (
  <>
    <Button style={{ border: '2px solid #1b1b1b' }}>Block</Button>
  </>
);

export const radio = () => (
  <>
    <Button type="radio" name="a" checked>
      선택 1
    </Button>
    <Button type="radio" name="a">
      선택 2
    </Button>
  </>
);
