/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export function hasClassnames(el, ...classNames) {
    return classNames.filter((cn) => el.classList.contains(cn)).length === classNames.length;
}
export function addClassnames(el, ...classNames) {
    classNames.forEach((cn) => {
        el.classList.add(cn);
    });
    return el;
}
export function removeClassnames(el, ...classNames) {
    classNames.forEach((cn) => {
        el.classList.remove(cn);
    });
    return el;
}
export function removeClassnamesUnless(el, classnamesToRemove, classnamesToKeep) {
    const filteredClassnamesToRemove = classnamesToRemove.filter(cn => classnamesToKeep.indexOf(cn) < 0);
    return removeClassnames(el, ...filteredClassnamesToRemove);
}
export function updateElementStyles(el, ...styleTuples) {
    styleTuples.forEach(([styleKey, value]) => {
        el.style[styleKey] = value;
    });
    return el;
}
export function pxToRem(pxValue) {
    const baseProp = window
        .getComputedStyle(document.body, null)
        .getPropertyValue('--cds-global-typography-base-font-size');
    const baseFontSize = (16 * parseInt(baseProp !== '' ? baseProp : '100%')) / 100;
    return `${pxValue / baseFontSize}rem`;
}
//# sourceMappingURL=css.js.map