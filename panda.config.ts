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
  gitignore: true,
  outdir: 'styled-system',
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],
  theme: {
    extend: {
      tokens: {
        colors: {
          title: { value: '#0A2540' },
          text: { value: '#425466' },
          topColor: { value: '#87C6D833' },
          bottomColor: { value: '#FE7B810D' },
          accent: { value: '#635BFF' },
        },
      },
    },
  },
});
