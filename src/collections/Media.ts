import type { CollectionConfig, ImageUploadFormatOptions } from "payload";

const formatOptions: ImageUploadFormatOptions = {
  format: "webp",
  options: {
    quality: 80,
  },
};
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
        width: 624,
        fit: "inside",
        withoutEnlargement: true,
        formatOptions,
      },
      {
        name: "Medium",
        height: 800,
        width: 1280,
        fit: "inside",
        withoutEnlargement: true,
        formatOptions,
      },
      {
        name: "Large",
        width: 1920,
        height: 1080,
        fit: "inside",
        withoutEnlargement: true,
        formatOptions,
      },
      {
        name: "Max",
        height: 1920,
        width: 2560,
        fit: "inside",
        withoutEnlargement: true,
        formatOptions,
      },
    ],
  },
};
