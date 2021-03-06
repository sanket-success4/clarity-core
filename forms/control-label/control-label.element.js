/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html, LitElement } from 'lit-element';
import { baseStyles, property } from '@cds/core/internal';
import { styles } from './control-label.element.css.js';
/**
 * Label
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-label status="primary | secondary">
 *   <label>...</label>
 * </cds-internal-control-label>
 * ```
 * @internal
 * @element cds-internal-control-label
 * @slot - For projecting label text
 */
export class CdsInternalControlLabel extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.action = 'primary';
    }
    static get styles() {
        return [baseStyles, styles];
    }
    render() {
        return html `
      <div class="private-host" cds-layout="horizontal gap:sm align:shrink">
        <slot></slot>
      </div>
    `;
    }
}
__decorate([
    property({ type: Boolean })
], CdsInternalControlLabel.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], CdsInternalControlLabel.prototype, "action", void 0);
//# sourceMappingURL=control-label.element.js.map