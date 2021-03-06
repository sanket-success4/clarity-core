export declare function hasClassnames(el: HTMLElement, ...classNames: string[]): boolean;
export declare function addClassnames(el: HTMLElement, ...classNames: string[]): HTMLElement;
export declare function removeClassnames(el: HTMLElement, ...classNames: string[]): HTMLElement;
export declare function removeClassnamesUnless(el: HTMLElement, classnamesToRemove: string[], classnamesToKeep: string[]): HTMLElement;
export declare function updateElementStyles(el: HTMLElement, ...styleTuples: [string, string][]): HTMLElement;
export declare function pxToRem(pxValue: number): string;
