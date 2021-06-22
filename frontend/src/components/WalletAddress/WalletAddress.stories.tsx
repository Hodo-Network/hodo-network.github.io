import React from "react";
import { Story, Meta } from "@storybook/react";

import { WalletAddress, WalletAddressProps } from "./WalletAddress";
import { ZERO_ADDRESS } from "../../constants";

export default {
  title: "Components/WalletAddress",
  component: WalletAddress,
} as Meta;

const Template: Story<WalletAddressProps> = (args) => (
  <WalletAddress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  address: ZERO_ADDRESS,
};