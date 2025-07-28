// globals/Terms.ts
import type { GlobalConfig } from "payload";

const Terms: GlobalConfig = {
  slug: "terms",
  label: "Terms Of Service",
  fields: [
    {
      name: "banner",
      type: "upload",
      relationTo: "media",
    },
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
      name: "tl",
      label: "Terms List",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "text",
          type: "richText",
        },
      ],
    },
  ],
};

export default Terms;
