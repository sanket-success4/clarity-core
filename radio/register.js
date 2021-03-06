/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { registerElementSafely } from '@cds/core/internal';
import { CdsRadioGroup } from './radio-group.element.js';
import { CdsRadio } from './radio.element.js';
import '@cds/core/forms/register.js';
registerElementSafely('cds-radio-group', CdsRadioGroup);
registerElementSafely('cds-radio', CdsRadio);
//# sourceMappingURL=register.js.map