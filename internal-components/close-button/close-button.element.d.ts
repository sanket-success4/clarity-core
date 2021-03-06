import { HTMLAttributeTuple } from '@cds/core/internal';
import { CdsIconButton } from '@cds/core/button';
export declare const CdsCloseButtonTagName = "cds-internal-close-button";
export declare function appendCloseButton(hostElement: HTMLElement, attributes?: HTMLAttributeTuple[], clickHandler?: () => void): void;
export declare function removeCloseButton(hostElement: HTMLElement): void;
/**
 * Standard close button for Clarity Components
 *
 * ```typescript
 * import '@cds/core/internal-components/close-button/register.js';
 * ```
 *
 * ```html
 * <cds-internal-close-button></cds-internal-close-button>
 * ```
 *
 * @element cds-internal-close-button
 * @cssprop --background
 * @cssprop --color
 * @cssprop --opacity
 * @cssprop --padding
 */
export declare class CdsInternalCloseButton extends CdsIconButton {
    iconSize: string;
    iconShape: string;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
    constructor();
}
