import { LitElement } from 'lit-element';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { AlertGroupTypes, AlertStatusTypes, AlertSizes } from './alert.interfaces.js';
export declare function getIconStatusTuple(status: string): [string, string];
export declare function iconShapeIsAlertStatusType(shape: string): boolean;
export declare function getIconStatusLabel(status: string): string;
export declare function getIconStatusShape(status: string): string;
export declare function getAlertContentLayout(containerType: 'wrapper' | 'content' | 'actions', alertGroupType: AlertGroupTypes, alertGroupHasPager: boolean): "align:stretch" | "" | "align:shrink";
/**
 * Alerts are banners that communicate a message with a severity attached to it.
 * They grab the user’s attention to provide critical information needed in context.
 *
 * Alerts outside of a cds-alert-group or cds-app-alert-group component will be
 * displayed as a "lightweight alert". Lightweight alerts, by default, provide no
 * close button component and they inherit no status (a.k.a. success, danger, etc.).
 *
 * Alerts inside a cds-alert-group component inherit their status from the containing
 * alert group.
 *
 * Alerts inside a cds-app-alert-group component inherit their status as a default from
 * the containing app-alert group, although it can be overridden on individual alerts.
 *
 * ```typescript
 * import '@cds/core/alert/register.js';
 * ```
 *
 * ```html
 *   <cds-alert>
 *     Single Alert
 *     <cds-alert-actions>
 *       buttons, links
 *     </cds-alert-actions>
 *   </cds-alert>
 * ```
 *
 * @element cds-alert
 * @slot - Content slot for inside the alert
 * @event closeChange - notify when the user has clicked the dismiss button
 * @cssprop --color
 * @cssprop --background
 * @cssprop --border-radius
 * @cssprop --border-color
 * @cssprop --icon-color
 * @cssprop --close-icon-color
 * @cssprop --close-icon-color-hover
 */
export declare class CdsAlert extends LitElement {
    private closeChange;
    /**
     * @type {default | sm}
     * Sets the overall height and width of the alert and icon based on value
     */
    size: AlertSizes;
    /**
     * Sets up the buttons, layouts, close-button and other properties based on the alert group container
     * Internal Use Only
     * @private
     */
    type: AlertGroupTypes;
    private idForAriaDescriber;
    /**
     * If false, the alert will not render the close button.
     *
     * Lightweight alerts do not display close buttons
     */
    closable: boolean;
    /**
     * @type {neutral | info | success | warning | danger | alt | loading}
     * Sets the color of the alert from a predefined list of statuses
     */
    status: AlertStatusTypes;
    i18n: {
        closeButtonAriaLabel: string;
        loading: string;
        info: string;
        success: string;
        warning: string;
        danger: string;
    };
    private alertActions;
    protected alertIcons: NodeListOf<CdsIcon>;
    protected closeButton: HTMLElement;
    connectedCallback(): void;
    updated(props: Map<string, any>): void;
    private get parentGroupHasPager();
    render(): import("lit-element").TemplateResult;
    constructor();
    private closeAlert;
    static get styles(): import("lit-element").CSSResult[];
}
