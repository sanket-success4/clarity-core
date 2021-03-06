/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons } from '../icon.service.js';
import { arrowMiniIconName, arrowMiniIcon } from '../shapes/arrow-mini.js';
import { calendarMiniIcon, calendarMiniIconName } from '../shapes/calendar-mini.js';
import { checkCircleMiniIcon, checkCircleMiniIconName } from '../shapes/check-circle-mini.js';
import { checkMiniIcon, checkMiniIconName } from '../shapes/check-mini.js';
import { errorMiniIcon, errorMiniIconName } from '../shapes/error-mini.js';
import { eventMiniIcon, eventMiniIconName } from '../shapes/event-mini.js';
import { filterGridCircleMiniIcon, filterGridCircleMiniIconName } from '../shapes/filter-grid-circle-mini.js';
import { filterGridMiniIcon, filterGridMiniIconName } from '../shapes/filter-grid-mini.js';
import { infoCircleMiniIcon, infoCircleMiniIconName } from '../shapes/info-circle-mini.js';
import { timesMiniIcon, timesMiniIconName } from '../shapes/times-mini.js';
import { warningMiniIcon, warningMiniIconName } from '../shapes/warning-mini.js';
export const miniCollectionIcons = [
    arrowMiniIcon,
    calendarMiniIcon,
    checkCircleMiniIcon,
    checkMiniIcon,
    errorMiniIcon,
    eventMiniIcon,
    filterGridMiniIcon,
    filterGridCircleMiniIcon,
    infoCircleMiniIcon,
    timesMiniIcon,
    warningMiniIcon,
];
export const miniCollectionAliases = [
    [timesMiniIconName, ['close-mini']],
    [infoCircleMiniIconName, ['info-mini']],
];
/**
 * Function that can be called to load the mini icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadMiniIconSet } from '@cds/core/icon';
 *
 * loadMiniIconSet();
 * ```
 *
 */
export function loadMiniIconSet() {
    ClarityIcons.addIcons(...miniCollectionIcons);
    ClarityIcons.addAliases(...miniCollectionAliases);
}
//# sourceMappingURL=mini.js.map