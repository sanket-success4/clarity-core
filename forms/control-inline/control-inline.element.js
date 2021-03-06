/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html } from 'lit-element';
import { property, event, getElementUpdates, internalProperty, getReactVersion, } from '@cds/core/internal';
import { styles } from './control-inline.element.css.js';
import { CdsControl } from '../control/control.element.js';
import { getStatusIcon } from '../utils/index.js';
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
export class CdsInternalControlInline extends CdsControl {
    constructor() {
        super(...arguments);
        /** Align the labels of controls within group left or right */
        this.controlAlign = 'left';
        /** @private */
        this.checked = false;
        /** @private */
        this.indeterminate = false;
        this.supportsPrefixSuffixActions = false;
    }
    static get styles() {
        return [...super.styles, styles];
    }
    render() {
        var _a, _b;
        return html `
      <div class="private-host" cds-layout="vertical gap:sm">
        <div cds-layout="horizontal gap:sm wrap:none ${this.controlAlign === 'right' ? 'order:reverse' : ''}">
          <div class="input" @click=${() => this.inputControl.click()}></div>
          <cds-internal-control-label
            action="secondary"
            .disabled="${this.disabled}"
            cds-layout="align:vertical-center"
          >
            <slot name="label"></slot>
          </cds-internal-control-label>
        </div>
        ${!this.isControlGroup && ((_a = this.messages) === null || _a === void 0 ? void 0 : _a.length)
            ? html ` <div cds-layout="horizontal wrap:none ${((_b = this.messages) === null || _b === void 0 ? void 0 : _b.length) ? 'gap:sm' : ''}">
              ${getStatusIcon(this.status)}
              <div cds-layout="align:vertical-center" class="messages">
                <slot name="message"></slot>
              </div>
            </div>`
            : ''}
      </div>
      <div cds-layout="display:screen-reader-only">
        <slot name="input"></slot>
      </div>
    `;
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        this.inputControl.addEventListener('change', () => (this.checked = this.inputControl.checked));
        this.observers.push(getElementUpdates(this.inputControl, 'checked', (value) => (this.checked = value === '' ? true : value)), getElementUpdates(this.inputControl, 'indeterminate', (value) => (this.indeterminate = value === '' ? true : value)));
    }
    updated(props) {
        super.updated(props);
        if (props.has('indeterminate') && props.get('indeterminate') !== this.indeterminate && this.indeterminate) {
            this.checked = false;
        }
        if (props.has('checked') && props.get('checked') !== this.checked && this.checked) {
            this.indeterminate = false;
            this.checkedChange.emit(this.checked);
        }
        // workaround to trigger property updates in React https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js?answertab=active#tab-top
        if (getReactVersion() && (props.has('checked') || props.has('indeterminate'))) {
            this.inputControl.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }
}
__decorate([
    property({ type: String })
], CdsInternalControlInline.prototype, "controlAlign", void 0);
__decorate([
    internalProperty()
], CdsInternalControlInline.prototype, "isControlGroup", void 0);
__decorate([
    internalProperty({ type: Boolean, reflect: true })
], CdsInternalControlInline.prototype, "checked", void 0);
__decorate([
    internalProperty({ type: Boolean, reflect: true })
], CdsInternalControlInline.prototype, "indeterminate", void 0);
__decorate([
    event()
], CdsInternalControlInline.prototype, "checkedChange", void 0);
//# sourceMappingURL=control-inline.element.js.map