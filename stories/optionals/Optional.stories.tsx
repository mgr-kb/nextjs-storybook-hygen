import React from "react";
import { Story, Meta } from "@storybook/react";
import { Optional } from "components/optionals/Optional";

export default {
  title: "Optional",
  component: Optional,
  argTypes: {},
} as Meta;

export const Default: Story = () => <Optional></Optional>;