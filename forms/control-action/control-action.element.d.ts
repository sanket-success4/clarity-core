import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { CdsBaseButton } from '@cds/core/internal';
/**
 * Control Action
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control-action>
 *
 * </cds-control-action>
 * ```
 * @internal
 * @element cds-control-action
 * @slot - For projecting text content or cds-icon
 */
export declare class CdsControlAction extends CdsBaseButton {
    /** Set the action type placement within the supporting input control */
    action: 'label' | 'prefix' | 'suffix';
    readonly: boolean;
    ariaLabel: string;
    protected icon: CdsIcon;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    connectedCallback(): void;
    private syncAria;
    updated(props: Map<string, any>): void;
    setSlotLocation(): void;
    private validateAriaLabel;
}
