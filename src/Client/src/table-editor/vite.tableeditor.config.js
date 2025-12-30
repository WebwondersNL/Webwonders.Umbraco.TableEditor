// vite.tableeditor.config.ts
import { defineConfig } from "vite";
import {sharedBuildConfig} from "../../vite.shared";

export default defineConfig({
    publicDir: "src/table-editor/public",
    build: {
        ...sharedBuildConfig,
        lib: {
            entry: "src/table-editor/manifest.ts",
            formats: ["es"],
            fileName: "webwonders-tableeditor",
        },
        outDir: "../wwwroot/App_Plugins/Webwonders-TableEditor",
    },
    base: "/App_Plugins/Webwonders-TableEditor/",
}); 
