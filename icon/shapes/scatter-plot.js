/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { renderIcon } from '../icon.renderer.js';
const icon = {
    outline: '<path d="M 32 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.105 2.895 31 4 31 L 32 31 C 33.105 31 34 30.105 34 29 L 34 7 C 34 5.895 33.105 5 32 5 Z M 4 29 L 4 7 L 32 7 L 32 29 Z"/><path d="M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z"/><path d="M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z"/><path d="M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>',
    outlineAlerted: '<path d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"/><path d="M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z"/><path d="M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z"/><path d="M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>',
    outlineBadged: '<path d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.104 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"/><path d="M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z"/><path d="M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z"/><path d="M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>',
    solid: '<path d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 32 5 C 33.105 5 34 5.896 34 7 Z M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>',
    solidAlerted: '<path d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 21.958 5 L 17.625 12.395 C 16.795 13.601 17.594 15.245 19.064 15.351 C 19.134 15.357 19.201 15.359 19.27 15.357 L 34 15.357 Z M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>',
    solidBadged: '<path d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.896 31 2 30.105 2 29 L 2 7 C 2 5.896 2.896 5 4 5 L 22.57 5 C 21.969 9.233 25.05 13.1 29.31 13.46 L 30.32 13.48 C 31.626 13.429 32.895 13.036 34 12.34 Z M 9.101 15.8 C 9.413 16.111 9.919 16.111 10.231 15.8 L 11.391 14.64 L 12.551 15.8 C 12.964 16.256 13.717 16.094 13.905 15.507 C 14.002 15.208 13.914 14.881 13.681 14.67 L 12.531 13.54 L 13.691 12.38 C 14.147 11.966 13.985 11.214 13.399 11.025 C 13.1 10.929 12.772 11.017 12.561 11.25 L 11.401 12.41 L 10.231 11.22 C 9.817 10.763 9.065 10.926 8.877 11.512 C 8.78 11.811 8.868 12.139 9.101 12.35 L 10.261 13.54 L 9.101 14.67 C 8.789 14.982 8.789 15.487 9.101 15.8 Z M 15.176 25.536 C 15.488 25.847 15.994 25.847 16.306 25.536 L 17.466 24.376 L 18.626 25.536 C 19.039 25.992 19.792 25.83 19.98 25.243 C 20.077 24.944 19.989 24.617 19.756 24.406 L 18.606 23.276 L 19.766 22.116 C 20.222 21.702 20.06 20.95 19.474 20.761 C 19.175 20.665 18.847 20.753 18.636 20.986 L 17.476 22.146 L 16.306 20.956 C 15.892 20.499 15.14 20.662 14.952 21.248 C 14.855 21.547 14.943 21.875 15.176 22.086 L 16.336 23.276 L 15.176 24.406 C 14.864 24.718 14.864 25.223 15.176 25.536 Z M 22.912 20.343 C 23.224 20.654 23.73 20.654 24.042 20.343 L 25.202 19.183 L 26.362 20.343 C 26.775 20.799 27.528 20.637 27.716 20.05 C 27.813 19.751 27.725 19.424 27.492 19.213 L 26.342 18.083 L 27.502 16.923 C 27.958 16.509 27.796 15.757 27.21 15.568 C 26.911 15.472 26.583 15.56 26.372 15.793 L 25.212 16.953 L 24.042 15.763 C 23.628 15.306 22.876 15.469 22.688 16.055 C 22.591 16.354 22.679 16.682 22.912 16.893 L 24.072 18.083 L 22.912 19.213 C 22.6 19.525 22.6 20.03 22.912 20.343 Z"/>',
};
export const scatterPlotIconName = 'scatter-plot';
export const scatterPlotIcon = [scatterPlotIconName, renderIcon(icon)];
//# sourceMappingURL=scatter-plot.js.map