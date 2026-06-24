// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare/nitro (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static SPA build mode:
//   - `nitro: false` disables the Cloudflare Worker / Nitro deploy plugin so the
//     production build is pure static client assets (no edge-runtime required).
//   - `tanstackStart.spa.enabled: true` tells TanStack Start to emit a SPA shell
//     index.html that hydrates entirely on the client — ready for Netlify, Vercel,
//     GitHub Pages, Cloudflare Pages, S3+CloudFront, etc.
//   - Lovable's in-editor preview (vite dev) is unaffected — it runs in serve mode
//     and never hits the nitro/cloudflare code path.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: { enabled: false },
    },
  },
});
