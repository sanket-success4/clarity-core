/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { render } from 'lit-html';
export function createTestElement(template) {
    const element = document.createElement('div');
    document.body.appendChild(element);
    if (template) {
        render(template, element);
    }
    return Promise.all(Array.from(document.querySelectorAll(':not(:defined)')).map(el => customElements.whenDefined(el.tagName))).then(() => element);
}
export function removeTestElement(element) {
    element.remove();
}
export function getComponentSlotContent(component) {
    var _a;
    return Array.from((_a = component.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('slot')).reduce((acc, slot) => {
        const name = slot.name.length > 0 ? slot.name : 'default';
        acc[name] = slot.assignedNodes().reduce((p, n) => {
            let returnDom = n.outerHTML;
            returnDom = n.outerHTML ? n.outerHTML : n.textContent.trim();
            return p + (returnDom ? returnDom : '');
        }, '');
        return acc;
    }, {});
}
function retry(fn, maxTries = 10, promise, promiseObject = {
    resolve: null,
    reject: null,
}) {
    maxTries--;
    promise =
        promise ||
            new Promise((resolve, reject) => {
                promiseObject.resolve = resolve;
                promiseObject.reject = reject;
            });
    fn()
        .then((result) => {
        promiseObject.resolve(result);
    })
        .catch(() => {
        if (maxTries > 0) {
            retry(fn, maxTries, promise, promiseObject);
        }
        else {
            promiseObject.reject('Max attempts reached');
        }
    });
    return promise;
}
export function componentIsStable(component) {
    return retry(() => 
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async (resolve, reject) => {
        const stable = await component.updateComplete;
        if (stable) {
            resolve('success');
        }
        else {
            reject('error');
        }
    }));
}
//# sourceMappingURL=utils.js.map