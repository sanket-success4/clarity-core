/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';
import { registerElementSafely } from '@cds/core/internal';
import { CdsInternalCloseButton, CdsCloseButtonTagName } from './close-button.element.js';
registerElementSafely(CdsCloseButtonTagName, CdsInternalCloseButton);
//# sourceMappingURL=register.js.map