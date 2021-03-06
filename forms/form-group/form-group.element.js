/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { LitElement, html } from 'lit-element';
import { baseStyles, querySlotAll, syncDefinedProps, property, childrenUpdateComplete, elementResize, pxToRem, } from '@cds/core/internal';
import { getLargestPrimaryLabelWidth, isVerticalLayout, defaultFormLayout, defaultControlWidth, } from '../utils/index.js';
import { styles } from './form-group.element.css.js';
/**
 * Form
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-form-group layout="horizontal">
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 *
 *   <cds-input>
 *     <label>Test</label>
 *     <input type="text" />
 *   </cds-input>
 * </cds-form-group>
 * ```
 *
 * @element cds-form-group
 * @slot - For projecting input controls
 */
export class CdsFormGroup extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * @type {horizontal | horizontal-inline | vertical | vertical-inline | compact}
         * Set to adjust the default control layout for all controls within form group.
         * When `responsive` is true this will be the largest size to scale to.
         */
        this.layout = defaultFormLayout;
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
        /**
         * Set the validate attribute to sync with HTML5 native validation
         * https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
         */
        this.validate = false;
    }
    get controlsAndGroups() {
        return [...Array.from(this.groups), ...Array.from(this.controls)];
    }
    static get styles() {
        return [baseStyles, styles];
    }
    render() {
        return html `
      <div class="private-host" cds-layout="vertical gap:${this.layout === 'compact' ? 'md' : 'lg'}">
        <slot></slot>
      </div>
    `;
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        this.syncLayouts();
        this.setControlLabelWidths();
        syncDefinedProps(props, this, this.controlsAndGroups);
    }
    updated(props) {
        super.updated(props);
        syncDefinedProps(props, this, Array.from(this.controlsAndGroups));
    }
    async setControlLabelWidths() {
        await childrenUpdateComplete(this.controlsAndGroups);
        this.style.setProperty('--internal-label-min-width', await getLargestPrimaryLabelWidth(this.controlsAndGroups));
        elementResize(this, () => this.style.setProperty('--internal-label-max-width', pxToRem(this.getBoundingClientRect().width)));
    }
    syncLayouts() {
        this.addEventListener('layoutChange', (e) => {
            e.preventDefault();
            if (!this.overflowElement && isVerticalLayout(e.detail)) {
                this.collapseForm(e.target);
            }
            if (e.target === this.overflowElement && !isVerticalLayout(e.detail)) {
                this.expandForm(e.detail);
            }
        });
    }
    collapseForm(control) {
        this.overflowElement = control;
        this.responsive = false;
        this.layout = 'vertical';
        control.updateComplete.then(() => (control.responsive = true));
    }
    expandForm(layout) {
        this.responsive = true;
        this.overflowElement = null;
        this.layout = layout;
    }
}
__decorate([
    property({ type: String })
], CdsFormGroup.prototype, "layout", void 0);
__decorate([
    property({ type: String })
], CdsFormGroup.prototype, "controlWidth", void 0);
__decorate([
    property({ type: Boolean })
], CdsFormGroup.prototype, "responsive", void 0);
__decorate([
    property({ type: Boolean })
], CdsFormGroup.prototype, "validate", void 0);
__decorate([
    querySlotAll('[cds-control]')
], CdsFormGroup.prototype, "controls", void 0);
__decorate([
    querySlotAll('[cds-control-group]')
], CdsFormGroup.prototype, "groups", void 0);
//# sourceMappingURL=form-group.element.js.map