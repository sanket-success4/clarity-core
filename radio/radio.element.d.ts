import { CdsInternalControlInline } from '@cds/core/forms';
/**
 * Radio
 *
 * ```typescript
 * import '@cds/core/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio>
 *   <label>Test</label>
 *   <input type="radio" />
 * </cds-radio>
 * ```
 *
 * @element cds-radio
 * @slot - For projecting radio input
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --fill-box-shadow
 */
export declare class CdsRadio extends CdsInternalControlInline {
    static get styles(): import("lit-element").CSSResult[];
}
