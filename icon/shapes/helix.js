/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { renderIcon } from '../icon.renderer.js';
const icon = {
    outline: '<path d="M8.88,13.07a.9.9,0,0,1-.49-1.66l8.93-5.73a.9.9,0,1,1,1,1.52L9.37,12.92A.9.9,0,0,1,8.88,13.07Z"/><path d="M13.25,15.11a.9.9,0,0,1-.49-1.66L18,10.08a.9.9,0,1,1,1,1.52L13.74,15A.9.9,0,0,1,13.25,15.11Z"/><path d="M19.72,30.23a.9.9,0,0,1-.49-1.66l8.93-5.73a.9.9,0,0,1,1,1.52L20.2,30.09A.9.9,0,0,1,19.72,30.23Z"/><path d="M18.92,25.94a.9.9,0,0,1-.49-1.66l5.25-3.37a.9.9,0,1,1,1,1.51L19.4,25.8A.89.89,0,0,1,18.92,25.94Z"/><path d="M21.56,5.69a3.59,3.59,0,0,1,.15,3.53L18.83,15h2.25l2.43-4.87a5.61,5.61,0,0,0-5-8.14H13.26l-1,2h6.22A3.61,3.61,0,0,1,21.56,5.69Z"/><path d="M32.91,20.78A5.53,5.53,0,0,0,27.66,17H9.31a3.54,3.54,0,0,1-3.56-3.67,3.61,3.61,0,0,1,.42-1.54l4.26-8.49a1,1,0,1,0-1.79-.9L4.4,10.84A5.67,5.67,0,0,0,4,15.22,5.53,5.53,0,0,0,9.28,19h7.6l-3.44,6.87a5.64,5.64,0,0,0,1.5,6.92A5.38,5.38,0,0,0,18.41,34h5.25l1-2H18.43a3.58,3.58,0,0,1-3.22-5.21L19.11,19h8.54a3.42,3.42,0,0,1,2.15.71,3.57,3.57,0,0,1,1,4.43l-4.12,8.22a1,1,0,1,0,1.79.9l4.06-8.1A5.67,5.67,0,0,0,32.91,20.78Z"/>',
    solid: '<path d="M32.16,19.63A5.55,5.55,0,0,0,27.42,17H10.06a4.36,4.36,0,0,1-3.67-2,4.07,4.07,0,0,1-.19-4.13l3.62-7,1.42,1.63-2.74,5.3,8.84-5.66a.91.91,0,0,1,1,1.53L7.84,13.38a2.13,2.13,0,0,0,.24.52,2.28,2.28,0,0,0,1.65,1L18.11,9.5a.91.91,0,0,1,1,1.52L13,14.94H20.8l2.41-4.82a5.6,5.6,0,0,0-5-8.12H9a1,1,0,0,0-.9.56L3.88,10.89a5.6,5.6,0,0,0,5,8.12h7.65l-3.43,6.87a5.6,5.6,0,0,0,5,8.12h9.28a1,1,0,0,0,.93-.65l4.14-8.24A5.58,5.58,0,0,0,32.16,19.63ZM17.75,25.57A.91.91,0,0,1,18,24.31l6-3.88A.91.91,0,1,1,25,22l-6,3.88a.91.91,0,0,1-1.26-.27ZM29,24.34l-9,5.78a.91.91,0,1,1-1-1.53l9-5.78a.91.91,0,1,1,1,1.53Z"/>',
};
export const helixIconName = 'helix';
export const helixIcon = [helixIconName, renderIcon(icon)];
//# sourceMappingURL=helix.js.map