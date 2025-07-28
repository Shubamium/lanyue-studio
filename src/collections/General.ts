// globals/General.ts
import type { GlobalConfig } from "payload";

const General: GlobalConfig = {
  slug: "general",
  label: "General",
  fields: [
    {
      name: "footer",
      type: "group",
      label: "Footer",
      fields: [
        {
          name: "h",
          type: "text",
          label: "Heading",
        },
        {
          name: "p",
          type: "textarea",
          label: "Paragraph",
        },
      ],
    },
    {
      name: "mail",
      type: "text",
      label: "Contact Email",
    },
    {
      name: "x",
      type: "text",
      label: "X URL",
    },
    {
      name: "discord",
      type: "text",
      label: "Discord URL",
    },
    {
      name: "cf",
      type: "text",
      label: "Commission Form URL",
    },
    {
      name: "af",
      type: "text",
      label: "Artist Form URL",
    },
  ],
};

export default General;
