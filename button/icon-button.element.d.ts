import { CdsButton } from './button.element.js';
/**
 * Icon buttons give applications a compact alternative to communicate action and direct user intent.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-icon-button><cds-icon shape="download"></cds-icon></cds-icon-button>
 * ```
 *
 * @element cds-icon-button
 * @slot - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --height
 * @cssprop --padding
 */
export declare class CdsIconButton extends CdsButton {
    /**
     * The aria-label attribute is required for accessibility. The cds-icon-button
     * will warn if used without the aria-label being set.
     *
     * Ideally, the aria-label will be specific to the button's purpose. Avoid sharing
     * generic labels across multiple icon buttons on a page.
     */
    ariaLabel: string;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
}
