import { CdsControl } from '@cds/core/forms';
/**
 * Date
 *
 * ```typescript
 * import '@cds/core/date/register.js';
 * ```
 *
 * ```html
 * <cds-date>
 *   <label>Date</label>
 *   <input type="date" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-date>
 * ```
 *
 * @element cds-date
 * @slot - For projecting date input and label
 */
export declare class CdsDate extends CdsControl {
    protected globalStyles: import("lit-element").CSSResult;
    protected get suffixDefaultTemplate(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
    constructor();
}
