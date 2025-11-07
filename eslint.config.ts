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
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      curly: ['error', 'all'],
      'style/brace-style': ['error', '1tbs'],
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
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
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
    },
    settings: {
      'import/core-modules': ['vue-router/auto-routes'],
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  ...pluginOxlint.configs['flat/recommended'],
  skipFormatting,
)
