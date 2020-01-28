import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from ".";

export default {
  title: "Switch",
  component: Switch
};

export const basic = () => (
  <>
    <Switch onChange={action('change')} />
    <Switch onChange={action('change')} checked />
    <Switch onChange={action('change')} disabled />
    <Switch onChange={action('change')} checked disabled />
  </>
)

export const checked = () => (
  <Switch checked />
)

export const disabled = () => (
  <Switch disabled />
)

export const checkedDisabled = () => (
  <Switch checked disabled />
)
