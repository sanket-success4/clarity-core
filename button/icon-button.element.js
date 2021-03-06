/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { baseStyles, property } from '@cds/core/internal';
import { html } from 'lit-element';
import { styles as baseButtonStyles } from './base-button.element.css.js';
import { styles } from './icon-button.element.css.js';
import { CdsButton, iconCheck, iconSpinner } from './button.element.js';
/**
 * Icon buttons give applications a compact alternative to communicate action and direct user intent.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-icon-button><cds-icon shape="download"></cds-icon></cds-icon-button>
 * ```
 *
 * @element cds-icon-button
 * @slot - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --height
 * @cssprop --padding
 */
export class CdsIconButton extends CdsButton {
    render() {
        return html `
      <div class="private-host">
        ${this.loadingState === "loading" /* LOADING */ ? iconSpinner(this.size) : ''}
        ${this.loadingState === "success" /* SUCCESS */ ? iconCheck : ''}
        ${this.loadingState === "default" /* DEFAULT */ ? html `<slot></slot>` : ''}
      </div>
    `;
    }
    static get styles() {
        return [baseStyles, baseButtonStyles, styles];
    }
}
__decorate([
    property({ type: String, required: 'warning' })
], CdsIconButton.prototype, "ariaLabel", void 0);
//# sourceMappingURL=icon-button.element.js.map