import { CdsControl } from '@cds/core/forms';
/**
 * Time Input
 *
 * ```typescript
 * import '@cds/core/time/register.js';
 * ```
 *
 * ```html
 * <cds-time>
 *   <label>time</label>
 *   <input type="time" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-time>
 * ```
 *
 * @element cds-time
 * @slot - For projecting time input and label
 * @cssprop --background
 * @cssprop --background-size
 * @cssprop --border
 * @cssprop --border-bottom
 * @cssprop --outline
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --line-height
 * @cssprop --transition
 */
export declare class CdsTime extends CdsControl {
    protected globalStyles: import("lit-element").CSSResult;
    protected get suffixDefaultTemplate(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
    constructor();
}
