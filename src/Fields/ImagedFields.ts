import { Field } from "payload";
import EmbedField from "./EmbedField";

export const ImagedFieldWithSize: Field[] = [
  {
    type: "select",
    name: "type",
    label: "Media Type",
    options: ["Image", "Video (Embed)"],
  },

  {
    name: "size",
    type: "select",
    label: "Sizing",
    options: [
      { label: "Portrait", value: "portrait" },
      { label: "Landscape", value: "landscape" },
    ],
  },

  {
    name: "artwork",
    type: "upload",
    relationTo: "media",
    admin: {
      condition: (_, data) => data.type == "Image",
    },
  },
  {
    ...EmbedField,
    name: "Video",
    admin: {
      condition: (_, data) => data.type == "Video (Embed)",
    },
  },
];
export const ImagedField: Field[] = [
  {
    type: "select",
    name: "type",
    label: "Media Type",
    options: ["Image", "Video (Embed)"],
  },

  {
    name: "artwork",
    type: "upload",
    relationTo: "media",
    admin: {
      condition: (_, data) => data.type == "Image",
    },
  },
  {
    ...EmbedField,
    name: "Video",
    admin: {
      condition: (_, data) => data.type == "Video (Embed)",
    },
  },
];
