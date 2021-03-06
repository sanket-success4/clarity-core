/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// DO NOT USE for conditionally applying behavior based on the host framework.
// These utilities are only for detecting host frameworks for debugging and logging.
// Host framework specific code should exist outside of the @cds/core package.
// Get values once then cache
let angularVersion;
let angularJSVersion;
let reactVersion;
let vueVersion;
export function getAngularVersion(useCache = true) {
    if (!useCache || !angularVersion) {
        const appRoot = document && document.querySelector('[ng-version]');
        angularVersion = appRoot ? `${appRoot.getAttribute('ng-version')}` : undefined;
    }
    return angularVersion;
}
export function getAngularJSVersion(useCache = true) {
    var _a, _b, _c;
    if (!useCache || !angularVersion) {
        angularJSVersion = (_c = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.angular) === null || _b === void 0 ? void 0 : _b.version) === null || _c === void 0 ? void 0 : _c.full;
    }
    return angularJSVersion;
}
export function getReactVersion(useCache = true) {
    var _a, _b, _c;
    if (!useCache || !reactVersion) {
        if ((_c = (_b = (_a = window) === null || _a === void 0 ? void 0 : _a.CDS) === null || _b === void 0 ? void 0 : _b._react) === null || _c === void 0 ? void 0 : _c.version) {
            reactVersion = window.CDS._react.version;
        }
        else if (document.querySelector('[data-reactroot], [data-reactid]')) {
            reactVersion = 'unknown version';
        }
        else {
            reactVersion = undefined;
        }
    }
    return reactVersion;
}
export function getVueVersion(useCache = true) {
    if (!useCache || !vueVersion) {
        const all = document.querySelectorAll('*');
        let el;
        for (let i = 0; i < all.length; i++) {
            if (all[i].__vue__) {
                el = all[i];
                break;
            }
        }
        vueVersion = el ? 'unknown version' : undefined;
    }
    return vueVersion;
}
export function isStorybook() {
    return window.location.href.includes('localhost:6006');
}
//# sourceMappingURL=framework.js.map