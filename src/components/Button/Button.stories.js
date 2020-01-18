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

export const type = () => (
  <>
    <h2>Single</h2>
    <Button>인라인 타입</Button>
    <Button block>블록 타입</Button>

    <h2>Group</h2>
    <ButtonGroup>
      <Button>버튼</Button>
      <Button>버튼</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button type="radio">버튼</Button>
      <Button type="radio">버튼</Button>
    </ButtonGroup>
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
