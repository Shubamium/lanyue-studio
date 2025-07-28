// collections/PortfolioText.ts
import { GlobalConfig } from "payload";

const PortfolioText: GlobalConfig = {
  slug: "portfolio-text",
  label: "Portfolio",
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
      name: "order",
      label: "Category Order",
      type: "relationship",
      relationTo: "portfolio-list",
      hasMany: true,
    },
  ],
};

export default PortfolioText;
