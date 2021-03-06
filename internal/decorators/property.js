/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { property as prop } from 'lit-element';
import { camelCaseToKebabCase, kebabCaseToPascalCase, capitalizeFirstLetter } from '../utils/string.js';
import { LogService } from '../services/log.service.js';
import { getAngularVersion, getReactVersion, getVueVersion } from '../utils/framework.js';
import { isNilOrEmpty } from '../utils/identity.js';
/**
 * https://developers.google.com/web/fundamentals/web-components/best-practices
 */
export function getDefaultOptions(propertyKey, options) {
    const type = options ? options.type : options;
    switch (type) {
        case Array:
            return Object.assign({ reflect: false }, options);
        case Object:
            return Object.assign({ reflect: false }, options);
        case String:
            return Object.assign({ reflect: true, attribute: camelCaseToKebabCase(propertyKey), converter: {
                    toAttribute: (value) => (value ? value : null),
                } }, options);
        case Number:
            return Object.assign({ reflect: true, attribute: camelCaseToKebabCase(propertyKey) }, options);
        case Boolean:
            return Object.assign({ reflect: true, attribute: camelCaseToKebabCase(propertyKey), converter: {
                    // Mimic standard HTML boolean attributes + support "false" attribute values
                    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
                    toAttribute: (value) => (value ? '' : null),
                    fromAttribute: (value) => value !== 'false' && value !== null,
                } }, options);
        case Date: {
            return Object.assign({ 
                // Parse date strings from attributes but do not reflect back into attribute
                reflect: false, converter: {
                    fromAttribute: (value) => new Date(value),
                } }, options);
        }
        default:
            return options;
    }
}
export function requirePropertyCheck(protoOrDescriptor, name, options) {
    const targetFirstUpdated = protoOrDescriptor.firstUpdated;
    function firstUpdated(props) {
        if (options && options.required && isNilOrEmpty(this[name])) {
            const message = options.requiredMessage || getRequiredMessage(options.required, name, this.tagName);
            if (options.required === 'error') {
                throw new Error(message);
            }
            else {
                LogService.warn(message, this);
            }
        }
        if (targetFirstUpdated) {
            targetFirstUpdated.apply(this, [props]);
        }
    }
    protoOrDescriptor.firstUpdated = firstUpdated;
}
function getRequiredMessage(level = 'warning', propertyName, tagName) {
    const tag = tagName.toLocaleLowerCase();
    return (`${capitalizeFirstLetter(level)}: ${propertyName} is required to use ${tag} component. Set the JS Property or HTML Attribute.\n\n` +
        `${getAngularVersion() ? `Angular: <${tag} [${propertyName}]="..."></${tag}>\n` : ''}` +
        `${getVueVersion() ? `Vue: <${tag} :${propertyName}="..."></${tag}>\n` : ''}` +
        `${getReactVersion() ? `React: <${kebabCaseToPascalCase(tag)} ${propertyName}={...} />\n` : ''}` +
        `${`HTML: <${tag} ${camelCaseToKebabCase(propertyName)}="..."></${tag}>\n`}` +
        `${`JavaScript: document.querySelector('${tag}').${propertyName} = '...';\n\n`}`);
}
/**
 * lit-element @property decorator with custom defaults specific to Clarity.
 * https://lit-element.polymer-project.org/guide/properties#property-options
 *
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A PropertyDeclaration may optionally be
 * supplied to configure property features.
 *
 * @ExportDecoratedItems
 */
export function property(options) {
    return (protoOrDescriptor, name) => {
        requirePropertyCheck(protoOrDescriptor, name, options);
        return prop(getDefaultOptions(name, options))(protoOrDescriptor, name);
    };
}
/**
 * lit-element @internalProperty decorator with custom defaults specific to Clarity.
 *
 * This is used for communication between internal component properties
 * that are not exposed as part of the public component API.
 *
 * A internalProperty decorator which creates a LitElement property which will
 * trigger a re-render when set but not allow the value to be updated through
 * public attributes.
 *
 * @ExportDecoratedItems
 */
export function internalProperty(options) {
    return (protoOrDescriptor, name) => {
        const defaultOptions = getDefaultOptions(name, options);
        if (defaultOptions) {
            defaultOptions.reflect = (options === null || options === void 0 ? void 0 : options.reflect) ? options.reflect : false; // prevent attr reflection by default
            if (defaultOptions.reflect && !(options === null || options === void 0 ? void 0 : options.attribute)) {
                // mark as internal attr if reflect and no provided attr
                // see description for more detail https://github.com/vmware/clarity/pull/5431
                defaultOptions.attribute = `_${camelCaseToKebabCase(name)}`;
            }
        }
        return prop(defaultOptions)(protoOrDescriptor, name);
    };
}
//# sourceMappingURL=property.js.map