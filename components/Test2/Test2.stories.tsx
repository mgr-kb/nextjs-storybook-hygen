import React from "react";
import { Story, Meta } from "@storybook/react";
import { Test2 } from "./Test2";

export default {
  title: "Test2",
  component: Test2,
  argTypes: {},
} as Meta;

export const Default: Story = () => <Test2></Test2>;