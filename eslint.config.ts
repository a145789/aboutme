import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import unocss from '@unocss/eslint-config/flat'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  unocss,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      curly: ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      'array-bracket-newline': ['error', { multiline: true }],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'CONDITIONALS',
            'LIST_RENDERING',
            'DEFINITION',
            'GLOBAL',
            'UNIQUE',
            ['ATTR_SHORTHAND_BOOL', 'ATTR_STATIC', 'ATTR_DYNAMIC'],
            'RENDER_MODIFIERS',
            'TWO_WAY_BINDING',
            'SLOT',
            'OTHER_DIRECTIVES',
            'CONTENT',
            'EVENTS',
          ],
          alphabetical: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
      'unocss/order-attributify': ['off'],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 2,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/multi-word-component-names': 'off',
    },
    settings: {
      'import/core-modules': ['vue-router/auto-routes'],
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  ...pluginOxlint.configs['flat/recommended'],
  skipFormatting,
)
