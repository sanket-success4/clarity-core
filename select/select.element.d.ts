import { CdsControl } from '@cds/core/forms';
/**
 * Select
 *
 * ```typescript
 * import '@cds/core/select';
 * ```
 *
 * ```html
 * <cds-select>
 *   <label>Test</label>
 *   <select>
 *    <option>Option One</option>
 *    <option>Option Two</option>
 *    <option>Option Three</option>
 *   </select>
 * </cds-select>
 * ```
 *
 * @element cds-select
 * @slot - For projecting select and label
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
export declare class CdsSelect extends CdsControl {
    protected get suffixDefaultTemplate(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
    protected globalStyles: import("lit-element").CSSResult;
    protected multiple: boolean;
    constructor();
    firstUpdated(props: Map<string, any>): void;
}
