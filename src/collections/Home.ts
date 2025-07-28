import buttonField from "@/Fields/ButtonField";
import EmbedField from "@/Fields/EmbedField";
import { ImagedField, ImagedFieldWithSize } from "@/Fields/ImagedFields";
import { Field, GlobalConfig, GroupField, NamedGroupField } from "payload";

const welcomeSection: GroupField = {
  name: "welcome",
  label: "Welcome",
  type: "group",
  fields: [
    { name: "hn", type: "text", label: "Heading Normal" },
    { name: "hb", type: "text", label: "Heading Bold" },
    { name: "sh", type: "text", label: "Paragraph Heading" },
    { name: "pa", type: "richText", label: "Paragraph A" },
    { name: "pb", type: "richText", label: "Paragraph B" },
    {
      name: "aa",
      type: "upload",
      relationTo: "media",
      label: "Art Left",
    },
    {
      name: "ab",
      type: "upload",
      relationTo: "media",
      label: "Art Right",
    },
    {
      name: "asa",
      type: "upload",
      relationTo: "media",
      label: "Side Art Left",
    },
    {
      name: "asb",
      type: "upload",
      relationTo: "media",
      label: "Side Art Right",
    },
  ],
};

const heroSection: GroupField = {
  name: "heroSection",
  label: "Hero",
  type: "group",

  fields: [
    { name: "sh", type: "text", label: "Subheading" },
    { name: "h", type: "text", label: "Heading" },
    { name: "p", type: "richText", label: "Paragraph" },
    { ...buttonField, name: "ba", label: "Button 1" } as GroupField,
    { ...buttonField, name: "bb", label: "Button 2" } as GroupField,
    {
      admin: {
        position: "sidebar",
      },
      name: "leftArt",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      admin: {
        position: "sidebar",
      },
      name: "rightArt",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

const visionSection: GroupField = {
  name: "vision",
  label: "Vision",
  type: "group",

  fields: [
    { name: "heading", type: "text" },
    { name: "paragraph", type: "richText" },
    { name: "background", type: "upload", relationTo: "media" },
    { ...buttonField, name: "button" },
  ],
};

const featuredArtistSection: NamedGroupField[] = [
  {
    name: "featuredArtist",
    label: "Featured Artist",
    type: "group",

    fields: [
      { name: "art", type: "upload", relationTo: "media" },
      { name: "sh", type: "text", label: "Subheading" },
      { name: "heading", type: "text", label: "Artist Name" },
      { name: "paragraph", type: "richText" },
    ],
  },
  {
    name: "featuredProjects",
    label: "Featured Project",
    type: "group",

    fields: [
      { name: "sh", type: "text", label: "Subheading" },
      { name: "banner", type: "upload", relationTo: "media" },
      { name: "h", type: "text", label: "Heading" },
      { name: "paragraph", type: "richText" },
      {
        name: "projects",
        label: "Projects",
        type: "array",
        fields: [...ImagedFieldWithSize],
      },
    ],
  },
];

const invitationSection: GroupField = {
  name: "invitation",
  type: "group",
  fields: [
    { name: "hb", type: "text", label: "Heading Bold" },
    { name: "hn", type: "text", label: "Heading Regular" },
    { ...buttonField, name: "ba", label: "Button A" },
    { ...buttonField, name: "bb", label: "Button B" },
    {
      name: "bg",
      type: "upload",
      relationTo: "media",
      label: "Background",
    },
    {
      name: "ia",
      type: "upload",
      label: "Image A",
      relationTo: "media",
    },
    {
      name: "ib",
      type: "upload",
      label: "Image B",
      relationTo: "media",
    },
    {
      name: "ic",
      type: "upload",
      label: "Image C",
      relationTo: "media",
    },
    {
      name: "imd",
      type: "upload",
      label: "Image D",
      relationTo: "media",
    },
  ],
};
const testimonials: GroupField = {
  name: "testimonials",
  label: "Testimonial",
  type: "group",

  fields: [
    { name: "hidden", type: "checkbox" },
    { name: "sh", type: "text", label: "Subheading" },
    { name: "h", type: "text", label: "Heading" },
    { name: "p", type: "richText", label: "Paragraph" },
    {
      name: "tlist",
      label: "Testimony List",
      type: "array",
      fields: [
        { name: "testimony", type: "richText" },
        { name: "name", type: "text" },
        { name: "title", type: "text" },
        {
          name: "pfp",
          type: "upload",
          relationTo: "media",
          label: "Profile Picture",
        },
      ],
    },
  ],
};
export const Home: GlobalConfig = {
  slug: "home",
  label: "Home",
  fields: [
    {
      type: "tabs",
      tabs: [
        heroSection,
        welcomeSection,
        visionSection,
        featuredArtistSection[0],
        featuredArtistSection[1],
        testimonials,
        invitationSection,
      ],
    },
  ],
};
export default Home;
