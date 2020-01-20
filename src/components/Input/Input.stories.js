import React from 'react';
import Input, { InputGroup } from '.';

export default {
  title: 'Input',
  component: Input,
  subcomponents: { InputGroup }
}

export const basic = () => (
  <Input placeholder="Input" />
)

export const block = () => (
  <Input placeholder="Input" block />
)

export const small = () => (
  <Input placeholder="Input" value="스몰사이즈" sm />
)

export const customStyle = () => (
  <Input placeholder="Input" style={{ border: '2px solid #333' }} />
)

export const group = () => (
  <>
    <h2>Inline</h2>
    <InputGroup>
      <Input placeholder="A" />
      <Input placeholder="B" />
    </InputGroup>

    <h2>Block</h2>
    <InputGroup block>
      <Input placeholder="A" />
      <Input placeholder="B" />
    </InputGroup>
  </>
)
