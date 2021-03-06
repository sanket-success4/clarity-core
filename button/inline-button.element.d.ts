import { CdsBaseButton } from '@cds/core/internal';
/**
 * Inline buttons are used inside and alongside textual content within Clarity components.
 * They give action buttons a less prominent, yet familiar, visual presence.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-inline-button>Button text goes here</cds-inline-button>
 * ```
 *
 * @element cds-inline-button
 * @slot - Content slot for inside the button
 * @cssprop --text-decoration
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --line-height
 * @cssprop --letter-spacing
 */
export declare class CdsInlineButton extends CdsBaseButton {
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
}
