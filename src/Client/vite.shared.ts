// vite.shared.ts
import type { UserConfig } from "vite";

export const sharedBuildConfig: UserConfig["build"] = {
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
        external: [/^@umbraco/],
    },
};
