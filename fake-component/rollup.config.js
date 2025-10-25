import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/index.mjs', 'format': 'es' },
      { file: 'dist/index.js', 'format': 'umd', name: 'FakeComponent' }
    ],
    plugins: [
      svelte({compilerOptions: {
          dev: false,
          compatibility: {
            componentApi: 4
          }
        }}),
      resolve()
    ]
  },
  {
    input: 'test/main.ts',
    output: [
      { file: 'test/dist/main.js', 'format': 'iife' },
    ],
    plugins: [
      svelte({compilerOptions: {
  dev: false,
    compatibility: {
    componentApi: 4
  }
}}),
      resolve()
    ]
  },
];
