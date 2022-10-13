import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyEdge from "@netlify/vite-plugin-netlify-edge";
const path = require("path");

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@public": path.resolve(__dirname, "./public"),
        "@component": path.resolve(__dirname, "./src/components"),
        "@layout": path.resolve(__dirname, "./src/layouts"),
      },
    },
    plugins: [
      qwikCity(),
      qwikVite({
        ssr: { outDir: "netlify/edge-functions/entry.netlify-edge" },
      }),
      tsconfigPaths(),
      netlifyEdge({ functionName: "entry.netlify-edge" }),
    ],
  };
});
