/// <reference types="@types/resize-observer-browser" />
import { LitElement } from 'lit-element';
import { EventEmitter } from '@cds/core/internal';
import { CdsControlMessage } from './../control-message/control-message.element.js';
import { ControlStatus, ControlLayout, ControlWidth } from './../utils/interfaces.js';
import { CdsInternalControlLabel } from '../control-label/control-label.element.js';
import { CdsControlAction } from '../control-action/control-action.element.js';
/**
 * Generic Control
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control>
 *   <label>control</label>
 *   <input type="text" />
 * </cds-control>
 * ```
 *
 * @slot - For projecting input and label
 */
export declare class CdsControl extends LitElement {
    /**
     * @type {neutral | error | success}
     * Set the status of form control validation
     */
    status: ControlStatus;
    /**
     * @type {stretch | shrink}
     * Adjust the control from the default full width or the browser default width
     */
    controlWidth: ControlWidth;
    /**
     * Set the validate attribute to sync with HTML5 native validation
     * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
     */
    validate: boolean;
    /**
     * By default forms will collapse to layout that prevents overflow.
     * If disabled control layout may break or overflow in unexpected ways.
     */
    responsive: boolean;
    /**
     * @type {vertical | horizontal | compact}
     * Set to adjust the default control layout. When `responsive` is true this will be the largest size to scale to.
     */
    get layout(): ControlLayout;
    set layout(value: ControlLayout);
    private _layout;
    protected focused: boolean;
    protected disabled: boolean;
    protected readonly: boolean;
    protected fixedControlWidth: boolean;
    protected supportsPrefixSuffixActions: boolean;
    protected get isRTL(): boolean;
    /** @private Used for hiding label for input groups */
    hiddenLabel: boolean;
    /** @private Used for control/form groups */
    inputControl: HTMLInputElement;
    protected label: HTMLLabelElement;
    /** @private */
    controlLabel: CdsInternalControlLabel;
    protected datalistControl: HTMLDataListElement;
    protected messages: NodeListOf<CdsControlMessage>;
    protected controlActions: NodeListOf<CdsControlAction>;
    protected inputControlId: string;
    private prefixAction;
    private suffixAction;
    private messageSlot;
    layoutChange: EventEmitter<ControlLayout>;
    protected observers: (MutationObserver | ResizeObserver)[];
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    protected get inputTemplate(): import("lit-element").TemplateResult;
    protected get prefixDefaultTemplate(): import("lit-element").TemplateResult;
    protected get suffixDefaultTemplate(): import("lit-element").TemplateResult;
    private get hasControlActions();
    private get primaryLabelTemplate();
    protected get messagesTemplate(): import("lit-element").TemplateResult;
    private get prefixTemplate();
    private get suffixTemplate();
    constructor();
    connectedCallback(): void;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    disconnectedCallback(): void;
    private setupDescribedByUpdates;
    private setupHostAttributes;
    private setupHTML5Validation;
    private setActionOffsetPadding;
    get layoutStable(): boolean;
    private setupResponsive;
    private setupHiddenLabel;
}
