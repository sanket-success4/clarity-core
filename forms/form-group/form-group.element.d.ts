import { LitElement } from 'lit-element';
import { FormLayout, ControlWidth } from '../utils/interfaces.js';
/**
 * Form
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-form-group layout="horizontal">
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 *
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 * </cds-form-group>
 * ```
 *
 * @element cds-form-group
 * @slot - For projecting input controls
 */
export declare class CdsFormGroup extends LitElement {
    /**
     * @type {horizontal | horizontal-inline | vertical | vertical-inline | compact}
     * Set to adjust the default control layout for all controls within form group.
     * When `responsive` is true this will be the largest size to scale to.
     */
    layout: FormLayout;
    /**
     * @type {stretch | shrink}
     * Adjust the control from the default full width or the browser default width
     */
    controlWidth: ControlWidth;
    /**
     * By default forms will collapse to layout that prevents overflow.
     * If disabled control layout may break or overflow in unexpected ways.
     */
    responsive: boolean;
    /**
     * Set the validate attribute to sync with HTML5 native validation
     * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
     */
    validate: boolean;
    private controls;
    private groups;
    private get controlsAndGroups();
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    private overflowElement;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    private setControlLabelWidths;
    private syncLayouts;
    private collapseForm;
    private expandForm;
}
