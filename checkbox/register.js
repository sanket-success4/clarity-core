/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { registerElementSafely } from '@cds/core/internal';
import { CdsCheckbox } from './checkbox.element.js';
import { CdsCheckboxGroup } from './checkbox-group.element.js';
import '@cds/core/forms/register.js';
registerElementSafely('cds-checkbox', CdsCheckbox);
registerElementSafely('cds-checkbox-group', CdsCheckboxGroup);
//# sourceMappingURL=register.js.map