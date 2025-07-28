// collections/CommissionText.ts
import type { Field, GlobalConfig } from "payload";

const timeline: Field = {
  name: "timeline",
  type: "group",
  label: "Timeline ",
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
      name: "steps",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "si",
          label: "Step Info List",
          type: "array",
          fields: [
            {
              name: "title",
              type: "text",
            },
            {
              name: "p",
              type: "richText",
              label: "Paragraph",
            },
          ],
        },
      ],
    },
  ],
};

const service: Field = {
  name: "service",
  type: "group",
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
      name: "steps",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "p",
          type: "richText",
          label: "Paragraph",
        },
      ],
    },
    {
      name: "cat",
      label: "Category List",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "slug",
          type: "text",
          admin: {
            description:
              "When clicked it will go to the pricing with this same slug.",
          },
        },
        {
          name: "p",
          type: "richText",
          label: "Paragraph",
        },
        {
          name: "art",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "subcat",
          type: "text",
          hasMany: true,
          label: "Subcategory",
        },
      ],
    },
  ],
};

const Pricing: Field = {
  type: "group",
  name: "pricing",
  fields: [
    {
      name: "Prices",
      type: "group",
      label: "Prices Section",
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
          name: "img",
          type: "upload",
          relationTo: "media",
          label: "Image",
        },
      ],
    },
    {
      name: "nl",
      type: "richText",
      label: "Notes Left",
    },
    {
      name: "nr",
      type: "richText",
      label: "Notes Right",
    },
    {
      name: "pricing_list",
      label: "Price List",
      type: "relationship",
      relationTo: "priceList",
      hasMany: true,
    },
  ],
};
const CommissionText: GlobalConfig = {
  slug: "commission",
  fields: [
    {
      type: "tabs",
      tabs: [timeline, service, Pricing],
    },

    // fields: [timeline],
  ],
};

export default CommissionText;
