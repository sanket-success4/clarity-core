/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html, LitElement, query } from 'lit-element';
import { baseStyles, property, querySlot, querySlotAll, id, childrenUpdateComplete, getElementLanguageDirection, event, describeElementByElements, updateComponentLayout, internalProperty, syncProps, pxToRem, getElementUpdates, } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { exclamationCircleIcon } from '@cds/core/icon/shapes/exclamation-circle.js';
import { checkCircleIcon } from '@cds/core/icon/shapes/check-circle.js';
import { styles } from './control.element.css.js';
import { syncHTML5Validation } from '../utils/validate.js';
import { associateInputToDatalist, getStatusIcon, associateInputAndLabel, controlIsWrapped, formLayouts, defaultFormLayout, defaultControlWidth, getCurrentMessageStatus, } from '../utils/index.js';
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
export class CdsControl extends LitElement {
    constructor() {
        super();
        /**
         * @type {neutral | error | success}
         * Set the status of form control validation
         */
        this.status = 'neutral';
        /**
         * @type {stretch | shrink}
         * Adjust the control from the default full width or the browser default width
         */
        this.controlWidth = defaultControlWidth;
        /**
         * Set the validate attribute to sync with HTML5 native validation
         * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
         */
        this.validate = false;
        /**
         * By default forms will collapse to layout that prevents overflow.
         * If disabled control layout may break or overflow in unexpected ways.
         */
        this.responsive = true;
        this._layout = defaultFormLayout;
        this.focused = false;
        this.disabled = false;
        this.readonly = false;
        this.fixedControlWidth = false;
        this.supportsPrefixSuffixActions = true;
        /** @private Used for hiding label for input groups */
        this.hiddenLabel = false;
        this.observers = [];
        ClarityIcons.addIcons(exclamationCircleIcon, checkCircleIcon);
    }
    /**
     * @type {vertical | horizontal | compact}
     * Set to adjust the default control layout. When `responsive` is true this will be the largest size to scale to.
     */
    get layout() {
        return this._layout;
    }
    set layout(value) {
        const oldValue = this._layout;
        this._layout = value ? value.replace('-inline', '') : defaultFormLayout; // auto convert any form-layouts from parent groups
        this.requestUpdate('layout', oldValue);
    }
    get isRTL() {
        return getElementLanguageDirection(this) === 'rtl';
    }
    static get styles() {
        return [baseStyles, styles];
    }
    render() {
        var _a;
        return html `
      ${this.hiddenLabel ? html `<span cds-layout="display:screen-reader-only"><slot name="label"></slot></span>` : ''}
      <div
        cds-layout="${this.layout === 'vertical' ? 'vertical gap:sm' : 'horizontal gap:lg'} align:stretch"
        class="private-host ${this.isRTL ? 'rtl' : ''}"
      >
        ${this.primaryLabelTemplate}
        <div
          cds-layout="
          ${this.layout === 'compact' ? 'horizontal' : 'vertical'}
          ${this.controlWidth === 'stretch' && !this.fixedControlWidth ? 'align:horizontal-stretch' : ''}
          ${((_a = this.messages) === null || _a === void 0 ? void 0 : _a.length) ? 'gap:sm' : ''}"
        >
          <div cds-layout="horizontal gap:sm wrap:none">
            <div
              cds-layout="horizontal align:top wrap:none ${this.controlWidth === 'shrink' || this.fixedControlWidth
            ? 'align:shrink'
            : 'align:horizontal-stretch'}"
              class="input-container"
            >
              ${this.inputTemplate} ${this.prefixTemplate}
              <slot name="input"></slot>
              ${this.suffixTemplate}
            </div>
            ${this.hiddenLabel ? '' : getStatusIcon(this.status)}
          </div>
          ${this.messagesTemplate}
        </div>
      </div>
    `;
    }
    get inputTemplate() {
        return html ``;
    }
    get prefixDefaultTemplate() {
        return html ``;
    }
    get suffixDefaultTemplate() {
        return html ``;
    }
    get hasControlActions() {
        return (this.controlActions.length ||
            this.prefixDefaultTemplate.getHTML().length ||
            this.suffixDefaultTemplate.getHTML().length);
    }
    get primaryLabelTemplate() {
        return html `
      ${!this.hiddenLabel
            ? html ` <cds-internal-control-label
            .disabled="${this.disabled}"
            cds-layout="align:shrink align:top"
            action="primary"
          >
            <slot name="label"></slot>
          </cds-internal-control-label>`
            : ''}
    `;
    }
    get messagesTemplate() {
        return html `
      <div cds-layout="${this.layout === 'compact' ? 'align:shrink' : ''}" class="messages">
        <slot name="message"></slot>
      </div>
    `;
    }
    get prefixTemplate() {
        return html `
      <div cds-layout="align:shrink align:vertical-center" class="prefix">
        <div cds-layout="horizontal gap:xs">
          ${this.prefixDefaultTemplate}
          <slot name="prefix"></slot>
        </div>
      </div>
    `;
    }
    get suffixTemplate() {
        return html `
      <div cds-layout="align:shrink align:vertical-center" class="suffix">
        <div cds-layout="horizontal gap:xs">
          <slot name="suffix"></slot>
          ${this.suffixDefaultTemplate}
        </div>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('cds-control', '');
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        associateInputAndLabel(this.inputControl, this.label, this.inputControlId);
        associateInputToDatalist(this.inputControl, this.datalistControl);
        this.setupHostAttributes();
        this.setupHTML5Validation();
        this.setActionOffsetPadding();
        this.setupResponsive();
        this.setupDescribedByUpdates();
        this.setupHiddenLabel();
    }
    updated(props) {
        super.updated(props);
        this.messages.forEach(message => syncProps(message, this, { disabled: props.has('disabled') }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.observers.forEach(o => o.disconnect());
    }
    setupDescribedByUpdates() {
        var _a;
        (_a = this.messageSlot) === null || _a === void 0 ? void 0 : _a.addEventListener('slotchange', async () => {
            describeElementByElements(this.inputControl, Array.from(this.messages));
            getCurrentMessageStatus(Array.from(this.messages)).then(s => (this.status = s));
        });
    }
    setupHostAttributes() {
        this.inputControl.addEventListener('focusin', () => (this.focused = true));
        this.inputControl.addEventListener('focusout', () => (this.focused = false));
        this.observers.push(getElementUpdates(this.inputControl, 'disabled', (value) => (this.disabled = value === '' ? true : value)), getElementUpdates(this.inputControl, 'readonly', (value) => (this.readonly = value === '' ? true : value)));
    }
    setupHTML5Validation() {
        var _a, _b;
        if (!((_b = (_a = this.inputControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.noValidate) && this.validate) {
            syncHTML5Validation(this, Array.from(this.messages));
        }
    }
    async setActionOffsetPadding() {
        await childrenUpdateComplete(this.controlActions);
        if (this.supportsPrefixSuffixActions && this.hasControlActions) {
            const start = pxToRem(this.prefixAction.getBoundingClientRect().width + 6);
            const end = pxToRem(this.suffixAction.getBoundingClientRect().width + 6);
            this.inputControl.style.setProperty('padding-left', this.isRTL ? end : start, 'important');
            this.inputControl.style.setProperty('padding-right', this.isRTL ? start : end, 'important');
        }
    }
    get layoutStable() {
        return this.hiddenLabel || !controlIsWrapped(this.inputControl, this.controlLabel, this.layout);
    }
    setupResponsive() {
        if (this.responsive && !this.hiddenLabel && this.controlLabel) {
            const layoutConfig = { layouts: formLayouts, initialLayout: this.layout };
            const observer = updateComponentLayout(this, layoutConfig, () => this.layoutChange.emit(this.layout, { bubbles: true }));
            this.observers.push(observer);
        }
    }
    setupHiddenLabel() {
        var _a;
        if ((_a = this.label.getAttribute('cds-layout')) === null || _a === void 0 ? void 0 : _a.includes('display:screen-reader-only')) {
            this.hiddenLabel = true;
        }
    }
}
__decorate([
    property({ type: String })
], CdsControl.prototype, "status", void 0);
__decorate([
    property({ type: String })
], CdsControl.prototype, "controlWidth", void 0);
__decorate([
    property({ type: Boolean })
], CdsControl.prototype, "validate", void 0);
__decorate([
    property({ type: Boolean })
], CdsControl.prototype, "responsive", void 0);
__decorate([
    property({ type: String })
], CdsControl.prototype, "layout", null);
__decorate([
    internalProperty({ type: Boolean, reflect: true })
], CdsControl.prototype, "focused", void 0);
__decorate([
    internalProperty({ type: Boolean, reflect: true })
], CdsControl.prototype, "disabled", void 0);
__decorate([
    internalProperty({ type: Boolean, reflect: true })
], CdsControl.prototype, "readonly", void 0);
__decorate([
    internalProperty()
], CdsControl.prototype, "fixedControlWidth", void 0);
__decorate([
    internalProperty()
], CdsControl.prototype, "supportsPrefixSuffixActions", void 0);
__decorate([
    internalProperty()
], CdsControl.prototype, "isRTL", null);
__decorate([
    internalProperty()
], CdsControl.prototype, "hiddenLabel", void 0);
__decorate([
    querySlot('input, select, textarea, [cds-control]', {
        required: 'error',
        requiredMessage: 'input element is missing',
        assign: 'input',
    })
], CdsControl.prototype, "inputControl", void 0);
__decorate([
    querySlot('label', {
        required: 'error',
        requiredMessage: 'To meet a11y standards a <label> should be provided.',
        assign: 'label',
    })
], CdsControl.prototype, "label", void 0);
__decorate([
    query('cds-internal-control-label[action=primary]')
], CdsControl.prototype, "controlLabel", void 0);
__decorate([
    querySlot('datalist')
], CdsControl.prototype, "datalistControl", void 0);
__decorate([
    querySlotAll('cds-control-message')
], CdsControl.prototype, "messages", void 0);
__decorate([
    querySlotAll('cds-control-action')
], CdsControl.prototype, "controlActions", void 0);
__decorate([
    id()
], CdsControl.prototype, "inputControlId", void 0);
__decorate([
    query('.prefix')
], CdsControl.prototype, "prefixAction", void 0);
__decorate([
    query('.suffix')
], CdsControl.prototype, "suffixAction", void 0);
__decorate([
    query('.messages')
], CdsControl.prototype, "messageSlot", void 0);
__decorate([
    event()
], CdsControl.prototype, "layoutChange", void 0);
//# sourceMappingURL=control.element.js.map