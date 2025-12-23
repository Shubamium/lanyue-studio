// collections/Members.ts
import { ImagedField } from "@/Fields/ImagedFields";
import type { CollectionConfig } from "payload";

const Members: CollectionConfig = {
  slug: "members",
  labels: {
    singular: "Member",
    plural: "Members",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      admin: {
        description:
          "Show artist in order (Ascending) on their corresponding tabs",
      },
    },
    {
      name: "role",
      type: "relationship",
      relationTo: "artist-type",
    },
    {
      name: "Hide",
      type: "checkbox",
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "pfp",
      label: "Artist Image",
      type: "upload",
      relationTo: "media", // assumes unified media collection
    },
    {
      name: "portfolio",
      type: "array",
      fields: [...ImagedField],
    },
    {
      name: "x",
      label: "X Twitter Link",
      type: "text",
      admin: {
        placeholder: "http://",
      },
    },
    {
      name: "other",
      label: "Other Links (Website)",
      type: "text",
      admin: {
        placeholder: "http://",
      },
    },
  ],
};

export default Members;
