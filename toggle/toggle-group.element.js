/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { querySlotAll } from '@cds/core/internal';
import { CdsInternalControlGroup } from '@cds/core/forms';
/**
 * Toggle Group
 *
 * ```typescript
 * import '@cds/core/toggle/register.js';
 * ```
 *
 * ```html
 * <cds-toggle-group>
 *   <label>Select an item</label>
 *   <cds-toggle>
 *     <label>toggle</label>
 *     <input type="checkbox" />
 *   </cds-toggle>
 *
 *   <cds-toggle>
 *     <label>toggle</label>
 *     <input type="checkbox" />
 *   </cds-toggle>
 * </cds-toggle-group>
 * ```
 *
 * @element cds-toggle-group
 * @slot - For projecting toggle controls
 */
export class CdsToggleGroup extends CdsInternalControlGroup {
}
__decorate([
    querySlotAll('cds-toggle', { assign: 'controls' })
], CdsToggleGroup.prototype, "controls", void 0);
//# sourceMappingURL=toggle-group.element.js.map