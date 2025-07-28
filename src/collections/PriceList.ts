import { CollectionConfig } from "payload";
const PriceList: CollectionConfig = {
  slug: "priceList",
  labels: {
    singular: "Pricing",
    plural: "Pricings",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      required: false,
      admin: {
        description:
          "The slug identifier for category from commission page to go here when clicked (prices page)",
      },
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media", // assuming media collection; adjust if different
    },
    {
      name: "view",
      type: "relationship",
      relationTo: "portfolio-list",
      maxDepth: 2,
      admin: {
        description:
          "What category of portfolio will be shown when pressing view works",
      },
    },
    {
      name: "categories",
      type: "array",

      fields: [
        {
          name: "name",
          type: "text",
          label: "Category Name",
        },
        {
          name: "items",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text",
            },
            {
              name: "price",
              type: "text",
            },
          ],
        },
        {
          name: "addons",
          type: "array",
          fields: [
            {
              name: "name",
              type: "text",
            },
            {
              name: "price",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};

export default PriceList;
