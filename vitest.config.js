import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig } from 'vitest/config'

export default mergeConfig(
  defineConfig({
    test: {
      environment: 'jsdom',
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
