import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true
    }),
    presetAttributify(),
    presetIcons({
      collections: {}
    })
  ],
  transformers: [transformerDirectives()]
})
