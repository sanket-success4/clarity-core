import { AlertGroupTypes } from '@cds/core/alert';
import { LitElement } from 'lit-element';
/**
 * Web component alert actions to be used inside default and banner alerts.
 *
 * ```typescript
 * import '@cds/core/alert/register.js';
 * ```
 *
 * ```html
 * <cds-alert>
 *   Lorem ipsum dolor sit amet
 *   <cds-alert-actions>
 *     <cds-button>Fix</cds-button>
 *   </cds-alert-actions>
 * </cds-alert>
 * ```
 *
 * @element cds-alert-actions
 * @slot
 * @cssprop --action-text-color
 * @cssprop --action-hover-text-color
 * @cssprop --action-font-size
 */
export declare class CdsAlertActions extends LitElement {
    /**
     * @type {default | banner | light}
     * @private
     */
    type: AlertGroupTypes;
    private buttons;
    render(): import("lit-element").TemplateResult;
    connectedCallback(): void;
    updated(props: Map<string, any>): void;
    static get styles(): import("lit-element").CSSResult[];
}
