/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { baseStyles, property } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './divider.element.css.js';
/**
 * Dividers are a convenient way to place lined dividers or "rules"
 * between blocks of content.
 *
 * ```typescript
 * import '@cds/core/divider/register.js';
 * ```
 *
 * ```html
 * <cds-divider></cds-divider>
 * ```
 * @beta
 * @element cds-divider
 * @cssprop --color
 * @cssprop --padding
 * @cssprop --size
 */
export class CdsDivider extends LitElement {
    constructor() {
        super(...arguments);
        this.orientation = 'horizontal';
    }
    render() {
        return html `<div class="private-host" role="separator" aria-orientation="${this.orientation}"></div>`;
    }
    static get styles() {
        return [baseStyles, styles];
    }
}
__decorate([
    property({ type: String })
], CdsDivider.prototype, "orientation", void 0);
//# sourceMappingURL=divider.element.js.map