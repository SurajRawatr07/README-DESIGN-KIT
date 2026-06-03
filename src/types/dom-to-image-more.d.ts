declare module 'dom-to-image-more' {
  export interface Options {
    filter?: (node: Node) => boolean;
    bgcolor?: string;
    width?: numb\ber;
    imagePlaceholder?: string;
 toPng: (node: Nod Node, options?: Options) => Promise<Uint8ClampedArray>;
