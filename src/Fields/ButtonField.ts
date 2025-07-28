import type { Field, GroupField } from "payload";

export const buttonField: GroupField = {
  name: "button",
  label: "Button",
  type: "group",
  fields: [
    { name: "text", type: "text", label: "Button Title" },
    {
      name: "path",
      type: "text",
      label: "On Click",
      admin: {
        description:
          "A path or url when the button is clicked (/home,/commissions,https://google.com)",
      },
    },
  ],
};

export default buttonField;
