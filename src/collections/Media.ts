import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "artist",
      label: "Artist Name",
      type: "text",
    },
    {
      name: "y",
      label: "Y Position Adjusment (Optional)",
      admin: {
        description:
          "0(top)-100(bottom) position fit for images shown in portfolio, Default is 40 ",
      },
      type: "number",
    },
  ],
  upload: {
    formatOptions: {
      format: "webp",
      options: {
        quality: 80,
      },
    },
    imageSizes: [
      {
        name: "Small",
        height: 400,
      },
      {
        name: "Medium",
        height: 800,
      },
      {
        name: "Large",
        height: 1080,
      },
      {
        name: "Max",
        height: 1920,
      },
    ],
  },
};
