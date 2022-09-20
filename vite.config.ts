/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import solid from 'solid-start/vite'
// @ts-ignore
import deno from 'solid-start-deno'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'
import replace, {RollupReplaceOptions} from '@rollup/plugin-replace'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
// @ts-ignore
import type { Options as AutoImportOptions } from 'unplugin-auto-import'

const replaceOptions: Partial<RollupReplaceOptions> = {
  __DATE__: new Date().toISOString(),
  preventAssignment: true,
}

const pwaOptions: Partial<VitePWAOptions> = {
  base: '/',
  strategies: 'injectManifest',
  srcDir: 'src',
  filename: 'sw.js',
  includeAssets: ['favicon.ico', 'robots.txt', 'localforage.min.js'],
  manifest: {
    name: 'hoa',
    short_name: 'hoa',
    description: 'train your hoa',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }
    ]
  },
}

const autoImportOptions: Partial<AutoImportOptions> = {
  imports: [
    'solid-js',
    {
      '@solid-primitives/destructure': [
        'destructure',
      ],
      '@solid-primitives/i18n': [
        'useI18n',
        'createI18nContext',
      ],
      '@testing-library/user-event': [
        ['default', 'userEvent'],
      ],
      '@solidjs/meta': [
        'Title',
      ],
    },
  ],
}


export default defineConfig({
  test: {
    ...configDefaults,
  },
  plugins: [
    solid({ adapter: deno() }),
    tsconfigPaths(),
    AutoImport(autoImportOptions),
    VitePWA(pwaOptions),
    replace(replaceOptions),
  ],
  build: {
    target: 'esnext',
  },
  ssr: {
    noExternal: [
      '@motionone/solid',
      'motion',
      'solid-toast',
      '@thisbeyond/solid-dnd',
    ],
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
})
