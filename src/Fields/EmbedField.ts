import { GroupField } from "payload";

const EmbedField: GroupField = {
  type: "group",

  fields: [
    // {
    //   name: "title",
    //   type: "text",
    //   label: "Video Title (Identification Only)",
    // },
    {
      name: "artist",
      label: "Artist Name",
      type: "text",
    },
    {
      name: "url",
      label: "Video URL",
      type: "text",
      admin: {
        description: "Change the 'play' part of the url to 'embed'",
      },
    },
  ],
};

export default EmbedField;
