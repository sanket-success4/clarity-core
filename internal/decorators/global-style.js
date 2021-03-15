/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// Legacy TS Decorator
function legacyEvent(descriptor, protoOrDescriptor, name) {
    Object.defineProperty(protoOrDescriptor, name, descriptor);
}
// TC39 Decorators proposal
function standardEvent(descriptor, element) {
    return {
        kind: 'method',
        placement: 'prototype',
        key: element.key,
        descriptor,
    };
}
/**
 * Appends a global `<style>` tag to the light DOM of a given custom element.
 * This is useful for when styles need to be applied that are not supported
 * withing a `::slotted()` selector such as ::-vendor style selectors.
 */
export function globalStyle() {
    return (protoOrDescriptor, name) => {
        const targetConnectedCallback = protoOrDescriptor.connectedCallback;
        function connectedCallback() {
            this[`__${name}StyleTag`] = document.createElement('style');
            this.prepend(this[`__${name}StyleTag`]);
            this[`__${name}StyleTag`].innerText = this[`__${name}GlobalStyle`].toString();
            if (targetConnectedCallback) {
                targetConnectedCallback.apply(this);
            }
        }
        protoOrDescriptor.connectedCallback = connectedCallback;
        const setter = function (value) {
            this[`__${name}GlobalStyle`] = value;
        };
        const descriptor = {
            set: setter,
            enumerable: true,
            configurable: true,
        };
        return name !== undefined
            ? legacyEvent(descriptor, protoOrDescriptor, name)
            : standardEvent(descriptor, protoOrDescriptor);
    };
}
//# sourceMappingURL=global-style.js.map