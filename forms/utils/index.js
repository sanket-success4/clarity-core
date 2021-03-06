/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit-element';
import { isVisible, pxToRem } from '@cds/core/internal';
export const formLayouts = ['vertical', 'vertical-inline', 'horizontal', 'horizontal-inline', 'compact'];
export const defaultFormLayout = 'horizontal';
export const defaultControlWidth = 'stretch';
export function associateInputAndLabel(input, label, id) {
    input.id = id;
    label.setAttribute('for', input.id);
}
export function associateInputToDatalist(input, datalist) {
    if (datalist) {
        datalist.id = `${input.id}-datalist`;
        input.setAttribute('list', datalist.id);
    }
}
export const layoutGroupToControlMapper = {
    'horizontal-inline': 'horizontal',
    'vertical-inline': 'vertical',
    horizontal: 'horizontal',
    vertical: 'vertical',
    compact: 'compact',
};
export function getStatusIcon(status) {
    return html `${status !== 'neutral'
        ? html ` <cds-control-action readonly class="status" cds-layout="align:shrink">
        <cds-icon
          status="${status === 'error' ? 'danger' : 'success'}"
          shape="${status === 'error' ? 'exclamation-circle' : 'check-circle'}"
          size="16"
          inner-offset=${4}
        ></cds-icon>
      </cds-control-action>`
        : ''} `;
}
export async function getLargestPrimaryLabelWidth(controls) {
    return Promise.all(controls.map(c => c.updateComplete)).then(() => {
        const primaryLabels = controls.filter(c => { var _a; return ((_a = c.controlLabel) === null || _a === void 0 ? void 0 : _a.action) === 'primary'; });
        return pxToRem(Math.max(...primaryLabels.map(c => c.controlLabel.getBoundingClientRect().width)));
    });
}
export function controlIsWrapped(input, label, layout) {
    return (layout !== 'vertical' &&
        layout !== 'vertical-inline' &&
        input.getBoundingClientRect().top > label.getBoundingClientRect().top + 12 // 12px buffer for rounding and inputs that are thin like the range input
    );
}
export function inlineControlListIsWrapped(inlineControls, layout) {
    const first = inlineControls[0];
    const last = inlineControls[inlineControls.length - 1];
    const isInlineLayout = layout === 'vertical-inline' || layout === 'horizontal-inline';
    return isInlineLayout && last.getBoundingClientRect().top > first.getBoundingClientRect().top;
}
export function isVerticalLayout(layout) {
    return layout === 'vertical' || layout === 'vertical-inline';
}
export async function getCurrentMessageStatus(messages) {
    const message = messages.find(m => m.status !== 'neutral');
    await (message === null || message === void 0 ? void 0 : message.updateComplete);
    return message && isVisible(message) ? message.status : 'neutral';
}
//# sourceMappingURL=index.js.map