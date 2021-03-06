/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { baseStyles, CdsBaseButton, getElementWidth, property, spanWrapper } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { errorStandardIcon } from '@cds/core/icon/shapes/error-standard.js';
import { checkIcon } from '@cds/core/icon/shapes/check.js';
import { html, query } from 'lit-element';
import { styles as baseButtonStyles } from './base-button.element.css.js';
import { styles } from './button.element.css.js';
export const iconSpinner = (size) => {
    const spinnerSize = size === 'sm' ? '12' : '18';
    return html `<span class="button-status-icon" cds-layout="horizontal align:center"><cds-progress-circle class="button-spinner" size="${spinnerSize}" status="info"></cds-progress-circle></span></span>`;
};
export const iconCheck = html `<span class="button-status-icon" cds-layout="horizontal align:center"
  ><cds-icon shape="check" status="success" cds-layout="align:center"></cds-icon
></span>`;
export const iconError = html `<span class="button-status-icon" cds-layout="horizontal align:center"
  ><cds-icon shape="error-standard" cds-layout="align:center"></cds-icon
></span>`;
/**
 * Buttons allow an application to communicate action and direct user intent.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-button>submit</cds-button>
 * ```
 *
 * @element cds-button
 * @slot - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --font-family
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --height
 * @cssprop --letter-spacing
 * @cssprop --min-width
 * @cssprop --padding
 * @cssprop --text-decoration
 * @cssprop --text-transform
 */
export class CdsButton extends CdsBaseButton {
    constructor() {
        super();
        /**
         * Define the type of action the button triggers
         *
         * - `solid`: buttons direct the user???s attention to the primary action the application is suggesting that the user take.
         * - `outline`: buttons indicate secondary actions that compliments a primary action or reduces visual noise when there are many actions on the page.
         * - `flat`: buttons are used as tertiary buttons. Can also be used inline because they are different from content in style and recognizable as buttons alongside content.
         */
        this.action = 'solid';
        /**
         * Sets the color of the button to match the following string statuses
         */
        this.status = 'primary';
        /**
         * Sets the overall height and width of the button based on the following string values:
         */
        this.size = 'md';
        /** Sets if the button should be full width with display block */
        this.block = false;
        /**
         * @type {default | loading | success | error}
         * Changes the button content based on the value passed.
         *
         * - `default`: shows the content of the button
         * - `loading`: disables the button and shows a spinner inside the button
         * - `success`: disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms
         * - `error`: shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)
         */
        this.loadingState = "default" /* DEFAULT */;
        ClarityIcons.addIcons(errorStandardIcon, checkIcon);
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        // Find and wrap any text nodes into span elements
        spanWrapper(this.childNodes);
        if (this.loadingState !== "default" /* DEFAULT */) {
            this.updateLoadingState();
        }
    }
    update(props) {
        if (this.privateHost && props.has('loadingState')) {
            this.updateLoadingState();
        }
        super.update(props);
    }
    render() {
        const loadingState = this.loadingState;
        return html `<div class="private-host">
      <div cds-layout="horizontal gap:sm wrap:none align:center">
        ${loadingState === "success" /* SUCCESS */ ? iconCheck : ''}
        ${loadingState === "error" /* ERROR */ ? iconError : ''}
        ${loadingState === "loading" /* LOADING */ ? iconSpinner(this.size) : ''}
        ${loadingState === "default" /* DEFAULT */
            ? html `<slot @slotchange=${() => spanWrapper(this.childNodes)}></slot>`
            : ''}
      </div>
    </div>`;
    }
    static get styles() {
        return [baseStyles, baseButtonStyles, styles];
    }
    updateLoadingState() {
        switch (this.loadingState) {
            case "loading" /* LOADING */:
                this.disableButton();
                return;
            case "success" /* SUCCESS */:
                this.disableButton();
                return;
            case "error" /* ERROR */:
                this.disableButton();
                return;
            default:
                this.enableButton();
        }
    }
    disableButton() {
        this.style.width = getElementWidth(this);
        this.disabled = true;
    }
    enableButton() {
        this.loadingState = "default" /* DEFAULT */;
        this.style.removeProperty('width');
        this.disabled = false;
    }
}
__decorate([
    property({ type: String })
], CdsButton.prototype, "action", void 0);
__decorate([
    property({ type: String })
], CdsButton.prototype, "status", void 0);
__decorate([
    property({ type: String })
], CdsButton.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], CdsButton.prototype, "block", void 0);
__decorate([
    query('.private-host')
], CdsButton.prototype, "privateHost", void 0);
__decorate([
    property({ type: String })
], CdsButton.prototype, "loadingState", void 0);
//# sourceMappingURL=button.element.js.map