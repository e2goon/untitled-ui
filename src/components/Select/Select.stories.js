import React from 'react';
import Select from '.';

export default {
  title: 'Select',
  component: Select
}

export const basic = () => (
  <Select text="년도를 선택하세요.">
    <option>2020년</option>
  </Select>
)

export const block = () => (
  <Select text="년도를 선택하세요." block>
    <option>2020년</option>
  </Select>
)

export const small = () => (
  <Select text="년도를 선택하세요." sm>
    <option>2020년</option>
  </Select>
)

export const custom = () => (
  <Select text="년도를 선택하세요." style={{ border: '2px solid #1b1b1b' }}>
    <option>2020년</option>
  </Select>
)
