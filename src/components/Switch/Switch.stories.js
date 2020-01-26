import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from ".";

export default {
  title: "Switch"
};

export const basic = () => (
  <>
    <Switch onClick={action('click')} />
    <Switch onClick={action('click')} checked />
    <Switch onClick={action('click')} disabled />
  </>
)

export const checked = () => (
  <Switch checked />
)

export const disabled = () => (
  <Switch disabled />
)
