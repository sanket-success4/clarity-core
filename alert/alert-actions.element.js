/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { assignSlotNames, baseStyles, querySlotAll, internalProperty } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './alert-actions.element.css.js';
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
export class CdsAlertActions extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * @type {default | banner | light}
         * @private
         */
        this.type = 'light';
    }
    render() {
        return html `<div class="private-host" cds-layout="horizontal wrap:none gap:sm align:vertical-center">
      <slot></slot>
    </div>`;
    }
    connectedCallback() {
        super.connectedCallback();
        assignSlotNames([this, 'actions']);
    }
    updated(props) {
        super.updated(props);
        this.buttons.forEach(b => {
            b.status = this.type === 'banner' ? 'inverse' : 'primary';
            b.size = this.type === 'banner' ? 'sm' : 'md';
            b.style.setProperty('--color', 'inherit');
        });
    }
    static get styles() {
        return [baseStyles, styles];
    }
}
__decorate([
    internalProperty({ type: String, reflect: true })
], CdsAlertActions.prototype, "type", void 0);
__decorate([
    querySlotAll('cds-button')
], CdsAlertActions.prototype, "buttons", void 0);
//# sourceMappingURL=alert-actions.element.js.map