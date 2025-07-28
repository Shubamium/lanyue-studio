// globals/Contact.ts
import type { GlobalConfig } from "payload";

const Contact: GlobalConfig = {
  slug: "contact",
  label: "Contact",
  fields: [
    {
      name: "sh",
      type: "text",
      label: "Subheading",
    },
    {
      name: "h",
      type: "text",
      label: "Heading",
    },
    {
      name: "p",
      type: "richText",
      label: "Paragraph",
    },
    {
      name: "il",
      label: "Info List",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "info",
          type: "text",
        },
        {
          name: "isLink",
          type: "checkbox",
        },
      ],
    },
    {
      name: "m",
      type: "text",
      label: "Note Message",
    },
    {
      name: "st",
      type: "richText",
      label: "Submit Text",
    },
    {
      name: "sb",
      type: "text",
      label: "Submit Button",
    },
  ],
};

export default Contact;
