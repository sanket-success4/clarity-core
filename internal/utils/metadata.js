/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { arrayToObject } from './array.js';
import { setPropStyles } from './string.js';
export function getElementStorybookArgTypes(tagName, customElementsMetadata) {
    const meta = arrayToObject(customElementsMetadata.tags, 'name')[tagName];
    return Object.assign(Object.assign(Object.assign({}, getPropOptionsStorybookArgs(meta)), getCustomPropsStorybookArgs(meta)), getSlotStorybookArgs(meta));
}
export function getElementStorybookArgs(args) {
    return Object.assign(Object.assign({}, args), { style: setPropStyles(args) });
}
function getCustomPropsStorybookArgs(customElementMetadata) {
    var _a;
    return (_a = customElementMetadata.cssProperties) === null || _a === void 0 ? void 0 : _a.reduce((obj, prop) => {
        var _a, _b;
        const type = ((_a = prop === null || prop === void 0 ? void 0 : prop.name) === null || _a === void 0 ? void 0 : _a.includes('color')) || ((_b = prop === null || prop === void 0 ? void 0 : prop.name) === null || _b === void 0 ? void 0 : _b.endsWith('background')) ? 'color' : 'text';
        return Object.assign(Object.assign({}, obj), { [prop.name]: { control: { type } } });
    }, {});
}
function getPropOptionsStorybookArgs(customElementMetadata) {
    var _a;
    return (_a = customElementMetadata.properties) === null || _a === void 0 ? void 0 : _a.filter((prop) => { var _a; return (_a = prop === null || prop === void 0 ? void 0 : prop.type) === null || _a === void 0 ? void 0 : _a.includes(' | '); }).reduce((obj, prop) => {
        const options = prop.type.split('|').map(p => p.replace(/"/g, '').replace(/\s/g, ''));
        return Object.assign(Object.assign({}, obj), { [prop.name]: {
                control: { type: 'select', options },
                defaultValue: options[0],
            } });
    }, {});
}
function getSlotStorybookArgs(customElementMetadata) {
    var _a;
    return (_a = customElementMetadata.slots) === null || _a === void 0 ? void 0 : _a.reduce((obj, prop) => {
        return Object.assign(Object.assign({}, obj), { [prop.name]: { control: { type: 'text' }, defaultValue: `${prop.name}` } });
    }, {});
}
//# sourceMappingURL=metadata.js.map