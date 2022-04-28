import React from "react";
import { Story, Meta } from "@storybook/react";
import { TestComp } from "components/molecules/TestComp";

export default {
  title: "TestComp",
  component: TestComp,
  argTypes: {},
} as Meta;

export const Default: Story = () => <TestComp></TestComp>;