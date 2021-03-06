import { LitElement } from 'lit-element';
import { AlertGroupTypes, AlertStatusTypes, AlertSizes } from './alert.interfaces.js';
/**
 * Alert groups are containers for a set of alerts. Alert groups can hold one or many alerts
 * inside of them with the expectation that all alerts will be of the same type. The exception
 * to this rule is the `loading` alert type, which will be displayed regardless of the type
 * of alert group containing it.
 *
 * ```typescript
 * import '@cds/core/alert/register.js';
 * ```
 *
 * ```html
 *   <cds-alert-group type="danger">
 *     <cds-alert closable="true">
 *       Single alert
 *       <cds-alert-actions>
 *         buttons, links
 *       </cds-alert-actions>
 *     </cds-alert>
 *     <cds-alert type="loading">
 *       Single Alert
 *     </cds-alert>
 *     <cds-alert closable="true">
 *       Another alert
 *       <cds-alert-actions>
 *         buttons, links
 *       </cds-alert-actions>
 *     </cds-alert>
 *   </cds-alert-group>
 * ```
 *
 * @element cds-alert-group
 * @slot - Content slot for the alerts
 * @cssprop --color
 * @cssprop --icon-color
 * @cssprop --icon-size
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --padding
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 */
export declare class CdsAlertGroup extends LitElement {
    /**
     * @type {default | sm}
     * Sets the overall height and width of the alerts inside the alert group
     */
    size: AlertSizes;
    /**
     * @type {default | banner | light}
     * Passed down into the alerts inside the alert-group
     */
    type: AlertGroupTypes;
    /**
     * Autosets the alert groups aria role to 'region'
     */
    role: string;
    /**
     * @type {neutral | info | success | warning | danger | alt | loading}
     * Sets the status of the alerts inside the alert group
     */
    status: AlertStatusTypes;
    private alerts;
    /** @private */
    pager: HTMLElement;
    private alertSlot;
    render(): import("lit-element").TemplateResult;
    firstUpdated(props: Map<string, any>): void;
    private setupAlertsUpdate;
    private syncAlerts;
    updated(props: Map<string, any>): void;
    static get styles(): import("lit-element").CSSResult[];
}
