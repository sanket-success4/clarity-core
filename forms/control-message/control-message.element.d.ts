import { LitElement } from 'lit-element';
import { ControlStatus } from '../utils/interfaces.js';
import { ValidityStateKey } from '../utils/validate.js';
/**
 * Control Message
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control>
 *   <label>Test</label>
 *   <input type="text" />
 *   <cds-control-message>helper text</cds-control-message>
 * </cds-control>
 * ```
 *
 * @element cds-control-message
 * @slot - For projecting helper message text
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 */
export declare class CdsControlMessage extends LitElement {
    /**
     * @type {neutral | error | success}
     * Set the status of form control message validation
     */
    status: ControlStatus;
    /**
     * Defines the HTML5 ValidityState message of given control
     * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
     */
    error: ValidityStateKey;
    protected disabled: boolean;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
    connectedCallback(): void;
}
