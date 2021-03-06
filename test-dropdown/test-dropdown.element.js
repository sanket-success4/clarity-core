/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { baseStyles, I18nService, event, property } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './test-dropdown.element.css.js';
/**
 * Dropdown, example test component. Do not use in production.
 *
 * ```typescript
 * import '@cds/core/test-dropdown';
 * ```
 *
 * ```html
 * <cds-test-dropdown title="click me!">
 *   Hello World
 * </cds-test-dropdown>
 * ```
 *
 * @beta
 * @slot - Content slot for dropdown content
 * @event {boolean} openChange - notify open state change of dropdown
 * @cssprop --border-color
 * @cssprop --background-color
 * @cssprop --text-color
 */
export class CdsTestDropdown extends LitElement {
    constructor() {
        super(...arguments);
        this._open = false;
        /** Set the dropdown button text */
        this.title = 'dropdown';
    }
    get open() {
        return this._open;
    }
    /** Set open to open or close the dropdown */
    set open(value) {
        if (value !== this._open) {
            const old = this._open;
            this._open = value;
            this.requestUpdate('open', old);
            this.openChange.emit(this.open);
        }
    }
    static get styles() {
        return [baseStyles, styles];
    }
    render() {
        return html `
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.title}</button>
        ${this.open
            ? html ` <div>
              ${I18nService.keys.dropdown.open}
              <slot></slot>
            </div>`
            : ''}
      </div>
    `;
    }
    /** Toggle the current open state of the dropdown */
    toggle() {
        this.open = !this.open;
    }
}
__decorate([
    event()
], CdsTestDropdown.prototype, "openChange", void 0);
__decorate([
    property({ type: Boolean })
], CdsTestDropdown.prototype, "open", null);
__decorate([
    property({ type: String })
], CdsTestDropdown.prototype, "title", void 0);
//# sourceMappingURL=test-dropdown.element.js.map