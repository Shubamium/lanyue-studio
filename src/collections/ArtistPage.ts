// collections/ArtistText.ts
import { GlobalConfig } from "payload";

const ArtistText: GlobalConfig = {
  slug: "artist-text",
  label: "Artist ",
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
      name: "i",
      label: "Artist Image",
      type: "upload",
      relationTo: "media",
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
      relationTo: "artist-type",
      required: true,
      hasMany: true,
    },
  ],
};

export default ArtistText;
