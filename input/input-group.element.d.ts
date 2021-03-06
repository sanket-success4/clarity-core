import { CdsInternalControlGroup } from '@cds/core/forms';
import { CdsInput } from './input.element.js';
/**
 * Input Group
 *
 * ```typescript
 * import '@cds/core/input/register.js';
 * ```
 *
 * ```html
 * <cds-input-group>
 *   <label>Host URL</label>
 *   <cds-select cds-layout="align:shrink">
 *     <label>URL Protocol</label>
 *     <select>
 *       <option>https://</option>
 *       <option>http://</option>
 *     </select>
 *   </cds-select>
 *   <cds-input>
 *     <label>Host URL</label>
 *     <input placeholder="example.com" type="url" />
 *   </cds-input>
 *   <cds-control-message>Host ID: 123456</cds-control-message>
 * </cds-input-group>
 * ```
 *
 * @element cds-input-group
 * @slot - For projecting inputs
 */
export declare class CdsInputGroup extends CdsInternalControlGroup {
    protected controls: NodeListOf<CdsInput>;
    protected isInlineControlGroup: boolean;
    static get styles(): import("lit-element").CSSResult[];
    firstUpdated(props: Map<string, any>): void;
}
