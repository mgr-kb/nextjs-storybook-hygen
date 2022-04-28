import React from "react";
import { Story, Meta } from "@storybook/react";
import { Text } from "components/atoms/Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {},
} as Meta;

export const Default: Story = () => <Text></Text>;