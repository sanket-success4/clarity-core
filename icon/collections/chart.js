/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons } from '../icon.service.js';
import { axisChartIcon, axisChartIconName } from '../shapes/axis-chart.js';
import { barChartIcon, barChartIconName } from '../shapes/bar-chart.js';
import { bellCurveIcon, bellCurveIconName } from '../shapes/bell-curve.js';
import { boxPlotIcon, boxPlotIconName } from '../shapes/box-plot.js';
import { bubbleChartIcon, bubbleChartIconName } from '../shapes/bubble-chart.js';
import { cloudChartIcon, cloudChartIconName } from '../shapes/cloud-chart.js';
import { curveChartIcon, curveChartIconName } from '../shapes/curve-chart.js';
import { gridChartIcon, gridChartIconName } from '../shapes/grid-chart.js';
import { heatMapIcon, heatMapIconName } from '../shapes/heat-map.js';
import { lineChartIcon, lineChartIconName } from '../shapes/line-chart.js';
import { pieChartIcon, pieChartIconName } from '../shapes/pie-chart.js';
import { scatterPlotIcon, scatterPlotIconName } from '../shapes/scatter-plot.js';
import { tickChartIcon, tickChartIconName } from '../shapes/tick-chart.js';
export const chartCollectionIcons = [
    axisChartIcon,
    barChartIcon,
    bellCurveIcon,
    boxPlotIcon,
    bubbleChartIcon,
    cloudChartIcon,
    curveChartIcon,
    gridChartIcon,
    heatMapIcon,
    lineChartIcon,
    pieChartIcon,
    scatterPlotIcon,
    tickChartIcon,
];
export const chartCollectionAliases = [[lineChartIconName, ['analytics']]];
/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadChartIconSet } from '@cds/core/icon';
 *
 * loadChartIconSet();
 * ```
 *
 */
export function loadChartIconSet() {
    ClarityIcons.addIcons(...chartCollectionIcons);
    ClarityIcons.addAliases(...chartCollectionAliases);
}
//# sourceMappingURL=chart.js.map