import React from "react";
import Button, { ButtonGroup } from "../Button";

export default {
  title: "Button",
  component: Button
};

export const size = () => (
  <>
    <Button>Normal</Button>
    <Button sm>Small</Button>
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

export const group = () => (
  <>
    <h2>Inline</h2>
    <ButtonGroup>
      <Button>버튼 A</Button>
      <Button>버튼 B</Button>
    </ButtonGroup>

    <h2>Block</h2>
    <ButtonGroup block>
      <Button type="radio" name="a">버튼 A</Button>
      <Button type="radio" name="a">버튼 B</Button>
    </ButtonGroup>
  </>
);
