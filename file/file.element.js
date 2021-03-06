/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html, internalProperty } from 'lit-element';
import { i18n, I18nService } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { folderIcon } from '@cds/core/icon/shapes/folder.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { styles } from './file.element.css.js';
/**
 * Time Input
 *
 * ```typescript
 * import '@cds/core/file/register.js';
 * ```
 *
 * ```html
 * <cds-file>
 *   <label>file</label>
 *   <input type="file" />
 * </cds-file>
 * ```
 *
 * @element cds-file
 * @slot - For projecting file input and label
 */
export class CdsFile extends CdsControl {
    constructor() {
        super();
        this.i18n = I18nService.keys.file;
        this.buttonLabel = this.i18n.browse;
        this.fixedControlWidth = true;
        this.supportsPrefixSuffixActions = false;
        ClarityIcons.addIcons(folderIcon, timesIcon);
    }
    static get styles() {
        return [...super.styles, styles];
    }
    get inputTemplate() {
        return html `
      <div>
        <cds-button size="sm" action="outline" @click="${() => this.label.click()}" ?disabled=${this.disabled}>
          <cds-icon shape="folder" aria-hidden="true"></cds-icon>
          ${this.buttonLabel}
        </cds-button>
        ${this.clearFiles}
      </div>
    `;
    }
    get clearFiles() {
        var _a;
        return ((_a = this.inputControl.files) === null || _a === void 0 ? void 0 : _a.length) ? html ` <cds-control-action @click="${() => this.updateLabelAndFocus()}" aria-label="${this.i18n.removeFile}">
          <cds-icon shape="times"></cds-icon>
        </cds-control-action>`
            : html ``;
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        this.inputControl.addEventListener('change', e => this.updateLabelAndFocus(e.target.files));
    }
    updateLabelAndFocus(files) {
        var _a;
        if (files && files.length) {
            this.buttonLabel = files.length > 1 ? `${files.length} ${this.i18n.files}` : files[0].name;
        }
        else {
            this.buttonLabel = this.i18n.browse;
            this.inputControl.value = '';
            const browseButton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('cds-button');
            if (browseButton) {
                browseButton.focus();
            }
        }
    }
}
__decorate([
    i18n()
], CdsFile.prototype, "i18n", void 0);
__decorate([
    internalProperty()
], CdsFile.prototype, "buttonLabel", void 0);
__decorate([
    internalProperty()
], CdsFile.prototype, "fixedControlWidth", void 0);
__decorate([
    internalProperty()
], CdsFile.prototype, "supportsPrefixSuffixActions", void 0);
//# sourceMappingURL=file.element.js.map