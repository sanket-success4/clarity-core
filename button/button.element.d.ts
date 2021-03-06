import { CdsBaseButton } from '@cds/core/internal';
export declare const iconSpinner: (size: string) => import("lit-element").TemplateResult;
export declare const iconCheck: import("lit-element").TemplateResult;
export declare const iconError: import("lit-element").TemplateResult;
export declare const enum ClrLoadingState {
    DEFAULT = "default",
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}
/**
 * Buttons allow an application to communicate action and direct user intent.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-button>submit</cds-button>
 * ```
 *
 * @element cds-button
 * @slot - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --font-family
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --height
 * @cssprop --letter-spacing
 * @cssprop --min-width
 * @cssprop --padding
 * @cssprop --text-decoration
 * @cssprop --text-transform
 */
export declare class CdsButton extends CdsBaseButton {
    /**
     * Define the type of action the button triggers
     *
     * - `solid`: buttons direct the user’s attention to the primary action the application is suggesting that the user take.
     * - `outline`: buttons indicate secondary actions that compliments a primary action or reduces visual noise when there are many actions on the page.
     * - `flat`: buttons are used as tertiary buttons. Can also be used inline because they are different from content in style and recognizable as buttons alongside content.
     */
    action: 'solid' | 'outline' | 'flat';
    /**
     * Sets the color of the button to match the following string statuses
     */
    status: 'primary' | 'success' | 'warning' | 'danger' | 'inverse';
    /**
     * Sets the overall height and width of the button based on the following string values:
     */
    size: 'sm' | 'md';
    /** Sets if the button should be full width with display block */
    block: boolean;
    privateHost: HTMLElement;
    /**
     * @type {default | loading | success | error}
     * Changes the button content based on the value passed.
     *
     * - `default`: shows the content of the button
     * - `loading`: disables the button and shows a spinner inside the button
     * - `success`: disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms
     * - `error`: shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)
     */
    loadingState: ClrLoadingState;
    constructor();
    firstUpdated(props: Map<string, any>): void;
    update(props: Map<string, any>): void;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
    private updateLoadingState;
    private disableButton;
    private enableButton;
}
