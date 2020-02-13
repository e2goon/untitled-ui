import React from "react";
import { addDecorator } from "@storybook/react";

import "../src/scss/global.scss";

addDecorator(storyFn => (
  <div style={{ margin: "0 auto", padding: "20px", maxWidth: "960px" }}>
    {storyFn()}
  </div>
));
