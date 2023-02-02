import { Link } from "../../components/Link";
import { Meta, StoryObj } from "@storybook/react";
import * as linkArgs from "../../components/Link/Link.args";

const LinkMeta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default LinkMeta;

export const Default: StoryObj<typeof Link> = {
  name: "Default",
  args: linkArgs.lightLink,
  render: (args) => <Link {...args}>This is a link</Link>,
};
