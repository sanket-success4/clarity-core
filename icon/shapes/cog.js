/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { renderIcon } from '../icon.renderer.js';
const icon = {
    outline: '<path d="M18.1,11c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S22,11,18.1,11z M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c2.8,0,5,2.2,5,5S20.9,23,18.1,23z"/><path d="M32.8,14.7L30,13.8l-0.6-1.5l1.4-2.6c0.3-0.6,0.2-1.4-0.3-1.9l-2.4-2.4c-0.5-0.5-1.3-0.6-1.9-0.3l-2.6,1.4l-1.5-0.6l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z M32,19.4l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.4,0.5,2.1,0.9l0.5,0.3l3.3-1.8l2,2l-1.8,3.3l0.3,0.5c0.4,0.7,0.7,1.4,0.9,2.1l0.1,0.5l3.6,1.1V19.4z"/>',
    outlineAlerted: '<path d="M33.7,15.4h-5.3v0.1l3.6,1.1v2.8l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.4l1.4-2.3l-0.6-2C21,2.4,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,16,33.9,15.7,33.7,15.4z"/><path d="M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c0.2,0,0.5,0,0.7,0.1c-0.2-0.6-0.3-1.3-0.2-2h-0.5c-3.9,0-7,3.1-7,7c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7c0-0.9-0.2-1.8-0.5-2.6h-2.2c0.5,0.8,0.7,1.6,0.7,2.5C23.1,20.8,20.9,23,18.1,23z"/>',
    outlineBadged: '<path d="M11.1,18c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7s-3.1-7-7-7C14.2,11,11.1,14.1,11.1,18z M23.1,18c0,2.8-2.2,5-5,5c-2.8,0-5-2.2-5-5s2.2-5,5-5C20.9,13,23.1,15.2,23.1,18z"/><path d="M32.8,14.7L30,13.8l-0.1-0.3c-0.8,0-1.6-0.2-2.4-0.4c0.3,0.6,0.6,1.3,0.8,1.9l0.1,0.5l3.6,1.1v2.8l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.3,0.5,1.9,0.8c-0.3-0.8-0.4-1.6-0.4-2.5l-0.4-0.2l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z"/>',
    solid: '<path d="M32.57,15.72l-3.35-1a11.65,11.65,0,0,0-.95-2.33l1.64-3.07a.61.61,0,0,0-.11-.72L27.41,6.2a.61.61,0,0,0-.72-.11L23.64,7.72a11.62,11.62,0,0,0-2.36-1l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"/>',
    solidAlerted: '<path d="M32.57,15.72,31.5,15.4H22.85A5.5,5.5,0,1,1,18,12.5a5.53,5.53,0,0,1,.65,0A3.68,3.68,0,0,1,19,9.89l2.09-3.62-.86-2.83A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72Z"/>',
    solidBadged: '<path d="M32.57,15.72l-3.35-1a12.12,12.12,0,0,0-.47-1.32,7.49,7.49,0,0,1-6.14-6.16,11.82,11.82,0,0,0-1.33-.48l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"/>',
};
export const cogIconName = 'cog';
export const cogIcon = [cogIconName, renderIcon(icon)];
//# sourceMappingURL=cog.js.map