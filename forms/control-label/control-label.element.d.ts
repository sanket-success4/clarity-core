import { LitElement } from 'lit-element';
/**
 * Label
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-label status="primary | secondary">
 *   <label>...</label>
 * </cds-internal-control-label>
 * ```
 * @internal
 * @element cds-internal-control-label
 * @slot - For projecting label text
 */
export declare class CdsInternalControlLabel extends LitElement {
    disabled: boolean;
    action: 'primary' | 'secondary';
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
