import { defineConfig } from '@pandacss/dev';

const isProductionEnv = process.env['NODE_ENV'] === 'production';

export default defineConfig({
  preflight: true,
  include: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/component/**/*.{js,jsx,ts,tsx}',
  ],
  hash: isProductionEnv,
  minify: isProductionEnv,
  jsxFramework: 'react',
  exclude: [],
  outdir: 'styled-system',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  theme: {
    extend: {},
  },
});
