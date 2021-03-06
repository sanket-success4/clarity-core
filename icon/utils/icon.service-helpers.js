/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { existsIn } from '@cds/core/internal';
import has from 'ramda/es/has.js';
import { renderIcon } from '../icon.renderer.js';
export function addIcons(shapes, registry) {
    shapes.forEach(s => {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        addIcon(s, registry);
    });
}
export function hasIcon(shapeName, registry) {
    return has(shapeName, registry);
}
export function getIcon(shapeName, registry) {
    return registry[shapeName] ? registry[shapeName] : registry.unknown;
}
function addIconToRegistry(shape, registry) {
    const [shapeName, template] = shape;
    registry[shapeName] = renderIcon(template);
}
export function addIcon(shape, registry) {
    const [shapeName] = shape;
    if (!hasIcon(shapeName, registry)) {
        addIconToRegistry(shape, registry);
    }
}
export function setIconAlias(shapeName, aliasName, registry) {
    if (existsIn([shapeName], registry)) {
        Object.defineProperty(registry, aliasName, {
            get: () => {
                return registry[shapeName];
            },
            enumerable: true,
            configurable: true,
        });
    }
}
export function setIconAliases(iconAlias, registry) {
    if (registry[iconAlias[0]]) {
        iconAlias[1].forEach(a => {
            setIconAlias(iconAlias[0], a, registry);
        });
    }
}
export function legacyAlias(aliases, registry) {
    for (const shapeNameKey in aliases) {
        // eslint-disable-next-line no-prototype-builtins
        if (aliases.hasOwnProperty(shapeNameKey)) {
            // eslint-disable-next-line no-prototype-builtins
            if (registry.hasOwnProperty(shapeNameKey)) {
                setIconAliases([shapeNameKey, aliases[shapeNameKey]], registry);
            }
            else {
                throw new Error(`An icon "${shapeNameKey}" you are trying to set aliases to doesn't exist in Clarity Icons.`);
            }
        }
    }
}
//# sourceMappingURL=icon.service-helpers.js.map