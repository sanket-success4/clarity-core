import { TemplateResult } from 'lit-html';
export declare function createTestElement(template?: TemplateResult): Promise<HTMLElement>;
export declare function removeTestElement(element: HTMLElement): void;
export declare function getComponentSlotContent(component: HTMLElement): {
    [name: string]: string;
};
export declare function componentIsStable(component: any): Promise<any>;
