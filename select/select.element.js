/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html } from 'lit-element';
import { globalStyle, internalProperty, listenForAttributeChange } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import { styles as globalStyles } from './select.global.css.js';
import { styles } from './select.element.css.js';
/**
 * Select
 *
 * ```typescript
 * import '@cds/core/select';
 * ```
 *
 * ```html
 * <cds-select>
 *   <label>Test</label>
 *   <select>
 *    <option>Option One</option>
 *    <option>Option Two</option>
 *    <option>Option Three</option>
 *   </select>
 * </cds-select>
 * ```
 *
 * @element cds-select
 * @slot - For projecting select and label
 * @cssprop --background
 * @cssprop --background-size
 * @cssprop --border
 * @cssprop --border-bottom
 * @cssprop --outline
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --line-height
 * @cssprop --transition
 */
export class CdsSelect extends CdsControl {
    constructor() {
        super();
        this.globalStyles = globalStyles;
        this.multiple = false;
        ClarityIcons.addIcons(angleIcon);
    }
    get suffixDefaultTemplate() {
        return html `<cds-control-action readonly><cds-icon shape="angle" direction="down"></cds-icon></cds-control-action>`;
    }
    static get styles() {
        return [...super.styles, inputStyles, styles];
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        this.multiple = this.inputControl.hasAttribute('multiple');
        this.observers.push(listenForAttributeChange(this.inputControl, 'multiple', val => (this.multiple = val !== null)));
    }
}
__decorate([
    globalStyle()
], CdsSelect.prototype, "globalStyles", void 0);
__decorate([
    internalProperty({ type: Boolean, reflect: true })
], CdsSelect.prototype, "multiple", void 0);
//# sourceMappingURL=select.element.js.map