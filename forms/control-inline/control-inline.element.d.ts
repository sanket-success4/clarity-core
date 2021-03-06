import { EventEmitter } from '@cds/core/internal';
import { CdsControl } from '../control/control.element.js';
/**
 * Internal Control Inline
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-inline>
 *   <label>inline</label>
 *   <input type="radio" />
 * </ds-internal-control-inline>
 * ```
 *
 * @slot - For projecting inline input and label
 */
export declare class CdsInternalControlInline extends CdsControl {
    /** Align the labels of controls within group left or right */
    controlAlign: 'left' | 'right';
    /** @private */
    isControlGroup: boolean;
    /** @private */
    protected checked: boolean;
    /** @private */
    protected indeterminate: boolean;
    /** @private */
    protected checkedChange: EventEmitter<boolean>;
    protected supportsPrefixSuffixActions: boolean;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
}
