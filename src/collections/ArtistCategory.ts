// collections/ArtistType.ts
import { ValidateSlug } from "@/ValidateSlug";
import type { CollectionConfig } from "payload";

const ArtistType: CollectionConfig = {
  slug: "artist-type",
  labels: {
    singular: "Member Category",
    plural: "Member Categories",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      required: true,
    },
  ],
};

export default ArtistType;
