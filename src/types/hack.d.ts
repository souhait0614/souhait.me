// NOTE: https://github.com/withastro/language-tools/issues/425
// TODO: 修正されたら消す
declare module 'svelte' {
  export interface ComponentConstructorOptions {
    target?: Element | Document | ShadowRoot;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [prop: string]: any;
  }
}
