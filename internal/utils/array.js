/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export function arrayToObject(arr, key) {
    return arr.reduce((obj, item) => {
        obj[item[key]] = item;
        return obj;
    }, {});
}
export function arrayTail(arr) {
    return arr.length ? arr[arr.length - 1] : void 0;
}
//# sourceMappingURL=array.js.map