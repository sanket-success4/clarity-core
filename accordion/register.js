/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { registerElementSafely } from '@cds/core/internal';
import { CdsAccordion } from './accordion.element.js';
import { CdsAccordionPanel } from './accordion-panel.element.js';
import { CdsAccordionContent } from './accordion-content.element.js';
import { CdsAccordionHeader } from './accordion-header.element.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import '@cds/core/icon/register.js';
registerElementSafely('cds-accordion', CdsAccordion);
registerElementSafely('cds-accordion-panel', CdsAccordionPanel);
registerElementSafely('cds-accordion-content', CdsAccordionContent);
registerElementSafely('cds-accordion-header', CdsAccordionHeader);
ClarityIcons.addIcons(angleIcon);
//# sourceMappingURL=register.js.map