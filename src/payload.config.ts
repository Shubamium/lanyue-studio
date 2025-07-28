// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import Home from "./collections/Home";
import PriceList from "./collections/PriceList";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

import Portfolio from "./collections/Portfolio";
import ArtistType from "./collections/ArtistCategory";
import Members from "./collections/Artists";
import CommissionText from "./collections/Commission";
import ArtistPage from "./collections/ArtistPage";
import PortfolioText from "./collections/PortfolioText";
import Contact from "./collections/Contact";
import Terms from "./collections/Terms";
import General from "./collections/General";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [ArtistType, Members, Portfolio, PriceList, Users, Media],
  globals: [
    General,
    Home,
    CommissionText,
    ArtistPage,
    PortfolioText,
    Contact,
    Terms,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
    autoGenerate: true,
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),

  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
