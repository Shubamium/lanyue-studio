import EmbedField from "@/Fields/EmbedField";
import { ImagedField } from "@/Fields/ImagedFields";
import { CollectionConfig } from "payload";

const Portfolio: CollectionConfig = {
  slug: "portfolio-list",
  labels: {
    singular: "Portfolio",
    plural: "Portfolios",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Category Name",
    },
    {
      name: "slug",
      type: "text",
      label: "Category Slug",
    },
    {
      name: "mediaItems",
      type: "array",
      label: "Image or Video List",
      admin: {
        description: "Select image or video (recommended video format .webm)",
      },
      fields: [...ImagedField],
    },
  ],
};

export default Portfolio;
