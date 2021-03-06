import { LitElement } from 'lit-element';
import { FocusTrap } from '../utils/focus-trap.js';
export declare class CdsBaseFocusTrap extends LitElement {
    focusTrap: FocusTrap;
    topReboundElement: HTMLElement;
    bottomReboundElement: HTMLElement;
    /**
     * Its recommended to remove or add a focus trap element from the DOM
     * some SSR systems can have technical constraints where the item can
     * only be removed via CSS/hidden.
     */
    hidden: boolean;
    protected demoMode: boolean;
    focusTrapId: string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, old: string, value: string): void;
    protected render(): import("lit-element").TemplateResult;
    private toggleFocusTrap;
}
