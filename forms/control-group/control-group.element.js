/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html, LitElement, query } from 'lit-element';
import { baseStyles, property, querySlot, querySlotAll, id, event, syncDefinedProps, describeElementByElements, updateComponentLayout, setAttributes, syncProps, } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { exclamationCircleIcon } from '@cds/core/icon/shapes/exclamation-circle.js';
import { checkCircleIcon } from '@cds/core/icon/shapes/check-circle.js';
import { styles } from './control-group.element.css.js';
import { getStatusIcon, controlIsWrapped, formLayouts, inlineControlListIsWrapped, defaultFormLayout, defaultControlWidth, getCurrentMessageStatus, } from '../utils/index.js';
/**
 * Internal Control Group
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-group>
 *   <label>...</label>
 *   <cds-control>
 *     <label></label>
 *     <input ... />
 *   </cds-control>
 *   <cds-control>
 *     <label></label>
 *     <input ... />
 *   </cds-control>
 * </cds-internal-control-group>
 * ```
 *
 * @element cds-internal-control-group
 * @slot - For projecting control group
 */
export class CdsInternalControlGroup extends LitElement {
    constructor() {
        super();
        /**
         * @type {neutral | error | success}
         * Set the status of control group validation
         */
        this.status = 'neutral';
        /** @type {horizontal | horizontal-inline | vertical | vertical-inline | compact} */
        this.layout = defaultFormLayout;
        /** Align the labels of controls within group left or right */
        this.controlAlign = 'left';
        /** Disable all controls within a control group or omit and disable controls individually */
        this.disabled = false;
        /**
         * @type {stretch | shrink}
         * Adjust the control from the default full width or the browser default width
         */
        this.controlWidth = defaultControlWidth;
        /**
         * By default forms will collapse to layout that prevents overflow.
         * If disabled control layout may break or overflow in unexpected ways.
         */
        this.responsive = true;
        this.isInlineControlGroup = false;
        this.isControlGroup = true;
        this.observers = [];
        ClarityIcons.addIcons(exclamationCircleIcon, checkCircleIcon);
    }
    static get styles() {
        return [baseStyles, styles];
    }
    get messagesTemplate() {
        var _a;
        return html `
      <div cds-layout="horizontal align:shrink ${((_a = this.messages) === null || _a === void 0 ? void 0 : _a.length) ? 'gap:sm' : ''}" class="messages-container">
        ${!this.isInlineControlGroup ? getStatusIcon(this.status) : ''}
        <div class="messages">
          <slot name="message"></slot>
        </div>
      </div>
    `;
    }
    get controlsTemplate() {
        return this.isInlineControlGroup
            ? html `
          <div cds-layout="horizontal gap:sm align:horizontal-stretch" class="input-container">
            <div class="controls" cds-layout="horizontal align:horizontal-stretch">
              <slot name="controls"></slot>
            </div>
            ${getStatusIcon(this.status)}
          </div>
        `
            : html `
          <div cds-layout="horizontal align:shrink" class="input-container">
            <div class="controls" cds-layout="${this.inlineControlLayout}">
              <slot name="controls"></slot>
            </div>
          </div>
        `;
    }
    get inlineControlLayout() {
        return !this.layout.includes('inline') && this.layout !== 'compact' ? 'vertical gap:sm' : 'horizontal gap:md';
    }
    get primaryLabelLayout() {
        return !this.layout.includes('vertical') ? 'horizontal gap:lg' : 'vertical gap:sm';
    }
    get controlMessageLayout() {
        return `${this.layout === 'compact' ? 'horizontal' : 'vertical'} gap:sm wrap:none align:stretch`;
    }
    render() {
        var _a;
        return html `
      <div class="private-host" cds-layout="${this.primaryLabelLayout}">
        <cds-internal-control-label .disabled=${this.disabled} cds-layout="align:top" action="primary">
          <slot name="label"></slot>
        </cds-internal-control-label>
        <div cds-layout="${this.controlMessageLayout}">
          ${this.controlsTemplate} ${((_a = this.messages) === null || _a === void 0 ? void 0 : _a.length) ? this.messagesTemplate : ''}
        </div>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        setAttributes(this, ['role', 'group'], ['cds-control-group', '']);
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        this.associateLabelAndGroup();
        this.setupDescribedByUpdates();
        this.setupResponsive();
    }
    updated(props) {
        super.updated(props);
        props.set('isControlGroup', true);
        this.controls.forEach((c) => (c.isControlGroup = true));
        this.messages.forEach(message => syncProps(message, this, { disabled: props.has('disabled') }));
        syncDefinedProps(props, this, Array.from(this.controls));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.observers.forEach(o => o.disconnect());
    }
    get layoutStable() {
        return (!inlineControlListIsWrapped(Array.from(this.controls), this.layout) &&
            !controlIsWrapped(this.controlSlot, this.controlLabel, this.layout));
    }
    associateLabelAndGroup() {
        this.setAttribute('aria-labelledby', this.groupLabelId);
        this.label.setAttribute('id', this.groupLabelId);
    }
    setupDescribedByUpdates() {
        var _a;
        (_a = this.messageSlot) === null || _a === void 0 ? void 0 : _a.addEventListener('slotchange', () => {
            describeElementByElements(this, Array.from(this.messages));
            getCurrentMessageStatus(Array.from(this.messages)).then(s => (this.status = s));
        });
    }
    setupResponsive() {
        if (this.responsive) {
            const layoutConfig = { layouts: formLayouts, initialLayout: this.layout };
            const observer = updateComponentLayout(this, layoutConfig, () => this.layoutChange.emit(this.layout, { bubbles: true }));
            this.observers.push(observer);
        }
    }
}
__decorate([
    property({ type: String })
], CdsInternalControlGroup.prototype, "status", void 0);
__decorate([
    property({ type: String })
], CdsInternalControlGroup.prototype, "layout", void 0);
__decorate([
    property({ type: String })
], CdsInternalControlGroup.prototype, "controlAlign", void 0);
__decorate([
    property({ type: Boolean })
], CdsInternalControlGroup.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], CdsInternalControlGroup.prototype, "controlWidth", void 0);
__decorate([
    property({ type: Boolean })
], CdsInternalControlGroup.prototype, "responsive", void 0);
__decorate([
    querySlot('label', {
        assign: 'label',
        required: 'warning',
        requiredMessage: 'To meet a11y standards a <label> should be provided',
    })
], CdsInternalControlGroup.prototype, "label", void 0);
__decorate([
    querySlotAll('cds-control, [cds-control]', { assign: 'controls' })
], CdsInternalControlGroup.prototype, "controls", void 0);
__decorate([
    querySlotAll('cds-control-message')
], CdsInternalControlGroup.prototype, "messages", void 0);
__decorate([
    query('cds-internal-control-label[action=primary]')
], CdsInternalControlGroup.prototype, "controlLabel", void 0);
__decorate([
    query('.controls')
], CdsInternalControlGroup.prototype, "controlSlot", void 0);
__decorate([
    query('.messages')
], CdsInternalControlGroup.prototype, "messageSlot", void 0);
__decorate([
    id()
], CdsInternalControlGroup.prototype, "groupLabelId", void 0);
__decorate([
    event()
], CdsInternalControlGroup.prototype, "layoutChange", void 0);
//# sourceMappingURL=control-group.element.js.map