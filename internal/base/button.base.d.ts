import { LitElement } from 'lit-element';
export declare class CdsBaseButton extends LitElement {
    readonly: boolean;
    type: 'button' | 'submit';
    name: string;
    value: string;
    disabled: boolean;
    protected ariaDisabled: 'true' | 'false' | null;
    protected tabIndexAttr: number | null;
    protected focused: boolean;
    protected active: boolean;
    protected role: string | null;
    protected isAnchor: boolean;
    protected icon: HTMLElement;
    protected badge: HTMLElement;
    protected render(): import("lit-element").TemplateResult;
    connectedCallback(): void;
    protected updated(props: Map<string, any>): void;
    /** This mimics the mouse-click visual behavior for keyboard only users and screen readers.
     * Browsers do not apply the CSS psuedo-selector :active in those instances. So we need this
     * for our :active styles to show.
     *
     * Make sure to update a component's CSS to account for the presence of the [_active] attribute
     * in all instance where :active is defined.
     *
     * @private
     */
    private showClick;
    private setupNativeButtonBehavior;
    /**
     * We have to append a hidden button outside the web component in the light DOM
     * This allows us to trigger native submit events within a form element.
     */
    private triggerNativeButtonBehavior;
    private emulateKeyBoardEventBehavior;
    private updateButtonAttributes;
}
