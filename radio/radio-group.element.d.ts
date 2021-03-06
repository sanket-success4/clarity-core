import { CdsInternalControlGroup } from '@cds/core/forms';
import { CdsRadio } from './radio.element.js';
/**
 * Radio Group
 *
 * ```typescript
 * import '@cds/core/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio-group>
 *   <label>radio group</label>
 *   <cds-radio>
 *     <label>item 1</label>
 *     <input type="radio" />
 *   </cds-radio>
 *
 *   <cds-radio>
 *     <label>item 2</label>
 *     <input type="radio" />
 *   </cds-radio>
 * </cds-radio-group>
 * ```
 *
 * @element cds-radio-group
 * @slot - For projecting cds-radio controls
 */
export declare class CdsRadioGroup extends CdsInternalControlGroup {
    protected controls: NodeListOf<CdsRadio>;
    protected radioName: string;
    static get styles(): import("lit-element").CSSResult[];
    firstUpdated(props: Map<string, any>): void;
    private associateRadioControls;
    private syncRadioControls;
}
