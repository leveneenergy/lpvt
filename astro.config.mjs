import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import netlify from '@astrojs/netlify';
import dotenv from 'dotenv';
import partytown from '@astrojs/partytown'

dotenv.config();
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? process.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? process.env.PUBLIC_SANITY_DATASET
const studioUrl = import.meta.env.PUBLIC_SANITY_STUDIO_URL ?? process.env.PUBLIC_SANITY_STUDIO_URL

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sanity({
    projectId,
    dataset,
    // Set useCdn to false if you're building statically.
    useCdn: true,
    studioBasePath: studioUrl
  }),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })],
  devToolbar: {
    enabled: false
  },
  vite: {
    resolve: {
      alias: {
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@interfaces": fileURLToPath(new URL("./src/interfaces", import.meta.url)),
      },
    },
  },
  output: 'server',
  adapter: netlify()
});
