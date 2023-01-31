import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  include: [`${__dirname}/**/*`],
  exclude: [`${__dirname}/node_modules/**/*`],
  rules: [
    [
      't-p-c',
      {
        color: '#515767',
        'font-size': '14px'
      }
    ]
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1643df',
        deep: '#1643df'
      }
    }
  }
});
