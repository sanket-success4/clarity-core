/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html, LitElement } from 'lit-element';
import { baseStyles, property, assignSlotNames, internalProperty } from '@cds/core/internal';
import { styles } from './control-message.element.css.js';
/**
 * Control Message
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control>
 *   <label>Test</label>
 *   <input type="text" />
 *   <cds-control-message>helper text</cds-control-message>
 * </cds-control>
 * ```
 *
 * @element cds-control-message
 * @slot - For projecting helper message text
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 */
export class CdsControlMessage extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * @type {neutral | error | success}
         * Set the status of form control message validation
         */
        this.status = 'neutral';
        this.disabled = false;
    }
    render() {
        return html `
      <div class="private-host">
        <slot></slot>
      </div>
    `;
    }
    static get styles() {
        return [baseStyles, styles];
    }
    connectedCallback() {
        super.connectedCallback();
        assignSlotNames([this, 'message']);
    }
}
__decorate([
    property({ type: String })
], CdsControlMessage.prototype, "status", void 0);
__decorate([
    property({ type: String })
], CdsControlMessage.prototype, "error", void 0);
__decorate([
    internalProperty({ type: Boolean, reflect: true })
], CdsControlMessage.prototype, "disabled", void 0);
//# sourceMappingURL=control-message.element.js.map