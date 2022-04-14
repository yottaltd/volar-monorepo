// eslint-disable-next-line max-len
/* eslint-disable no-undef, @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any */

declare module 'vue' {
  import { CompatVue } from '@vue/runtime-dom';
  const Vue: CompatVue;
  export default Vue;
  export * from '@vue/runtime-dom';
}
