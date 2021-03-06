/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@cds/core/icon/register.js';
import { registerElementSafely } from '@cds/core/internal';
import { CdsControl } from './control/control.element.js';
import { CdsControlAction } from './control-action/control-action.element.js';
import { CdsInternalControlGroup } from './control-group/control-group.element.js';
import { CdsInternalControlInline } from './control-inline/control-inline.element.js';
import { CdsInternalControlLabel } from './control-label/control-label.element.js';
import { CdsControlMessage } from './control-message/control-message.element.js';
import { CdsFormGroup } from './form-group/form-group.element.js';
registerElementSafely('cds-control', CdsControl);
registerElementSafely('cds-control-action', CdsControlAction);
registerElementSafely('cds-internal-control-group', CdsInternalControlGroup);
registerElementSafely('cds-internal-control-inline', CdsInternalControlInline);
registerElementSafely('cds-internal-control-label', CdsInternalControlLabel);
registerElementSafely('cds-control-message', CdsControlMessage);
registerElementSafely('cds-form-group', CdsFormGroup);
//# sourceMappingURL=register.js.map