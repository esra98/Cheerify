import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: "CLİCK ME",
    variant: "solid",
  },
};
export const Outline: Story = {
  args: {
    children: "CLİCK ME",
    variant: "outline",
  },
};
export const Ghost: Story = {
  args: {
    children: "CLİCK ME",
    variant: "ghost",
  },
};
