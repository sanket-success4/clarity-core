/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import is from 'ramda/es/is.js';
import isEmpty from 'ramda/es/isEmpty.js';
import isNil from 'ramda/es/isNil.js';
export function isNilOrEmpty(val) {
    return isNil(val) || isEmpty(val);
}
export function isString(val) {
    return is(String, val);
}
export function isNumericString(val) {
    return isString(val) && !isEmpty(val.trim()) && +val === +val;
}
export function isStringOrNil(val) {
    return is(String, val) || isNil(val);
}
export function isStringAndNotNilOrEmpty(val) {
    return isString(val) && !isNil(val) && !isEmpty(val);
}
export function isObject(val) {
    return is(Object, val);
}
export function isMap(val) {
    return is(Map, val);
}
export function isObjectAndNotNilOrEmpty(val) {
    return !isNilOrEmpty(val) && isObject(val);
}
export function hasPropertyChanged(val, oldVal) {
    return val !== oldVal;
}
// marks nil values (undefined, null, empty string) as changed
export function hasStringPropertyChanged(val, oldVal) {
    return isStringOrNil(val) && hasPropertyChanged(val, oldVal);
}
// ignores nil values when checking for changes
export function hasStringPropertyChangedAndNotNil(val, oldVal) {
    return !isNilOrEmpty(val) && hasPropertyChanged(val, oldVal);
}
export function getEnumValues(enumeration) {
    return Object.values(enumeration);
}
export function createId(prefix = '_') {
    return `${prefix}${Math.random().toString(36).substr(2, 9)}`;
}
// used by deepClone() tested through integration
function cloneMap(mp) {
    const clonedMap = new Map();
    for (const [key, val] of mp) {
        if (isMap(val)) {
            clonedMap.set(key, cloneMap(val));
        }
        else {
            clonedMap.set(key, val);
        }
    }
    return clonedMap;
}
export function deepClone(obj) {
    // this will clone almost anything (maps, arrays, objects, etc.) to the lowest of the low levels
    // be careful using this carelessly b/c it CAN have performance implications!
    return isMap(obj) ? cloneMap(obj) : JSON.parse(JSON.stringify(obj));
}
//# sourceMappingURL=identity.js.map