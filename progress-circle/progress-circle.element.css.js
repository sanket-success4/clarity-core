import { css } from 'lit-element';
/* @internal */
export const styles = css `:host{--ring-opacity: 1;--ring-color: var(--cds-alias-status-neutral-tint, var(--cds-global-color-construction-50, #f1f6f8));--fill-color: var(--cds-alias-status-neutral, var(--cds-global-color-construction-600, #4f6169));font-family:inherit;font-size:inherit;color:inherit;display:block;cursor:inherit}svg{display:block;width:100%;height:100%}.private-host{display:flex;align-items:center;justify-content:center;height:100%;width:100%}.private-host .backstroke{stroke:var(--ring-color);opacity:var(--ring-opacity)}.private-host .arcstroke{stroke:var(--fill-color);transition:stroke-dashoffset 300ms ease-in-out}:host,:host([size='sm']){height:var(--cds-global-space-7, 0.8rem);width:var(--cds-global-space-7, 0.8rem)}:host([size='md']){height:var(--cds-global-space-9, 1.2rem);width:var(--cds-global-space-9, 1.2rem)}:host([size='lg']){height:var(--cds-global-space-11, 1.8rem);width:var(--cds-global-space-11, 1.8rem)}:host([size='xl']){height:var(--cds-global-space-12, 2.4rem);width:var(--cds-global-space-12, 2.4rem)}:host([size='xxl']){height:calc(var(--cds-global-space-13, 3.6rem) - var(--cds-global-space-5, 0.4rem));width:calc(var(--cds-global-space-13, 3.6rem) - var(--cds-global-space-5, 0.4rem))}:host([value='0']) .fillstroke,:host([value='100']) .fillstroke{display:none}:host(:not([value])) .progress-wrapper{animation:spin 0.8s cubic-bezier(0.17, 0.4, 0.8, 0.79) infinite}:host([status='info']){--ring-color: var(--cds-alias-status-info-tint, var(--cds-global-color-blue-50, #e6f7ff));--fill-color: var(--cds-alias-status-info, var(--cds-global-color-blue-700, #0079ad))}:host([status='success']){--ring-color: var(--cds-alias-status-success-tint, var(--cds-global-color-green-50, #eefce3));--fill-color: var(--cds-alias-status-success, var(--cds-global-color-green-700, #42810e))}:host([status='warning']){--ring-color: var(--cds-alias-status-warning-tint, var(--cds-global-color-ochre-100, #fff2d6));--fill-color: var(--cds-alias-status-warning, var(--cds-global-color-ochre-500, #ffb92e))}:host([status='danger']){--ring-color: var(--cds-alias-status-danger-tint, var(--cds-global-color-red-50, #fff2f0));--fill-color: var(--cds-alias-status-danger, var(--cds-global-color-red-700, #e02200))}:host([status='alt']){--ring-color: var(--cds-alias-status-alt-tint, var(--cds-global-color-violet-600, #9b32c8));--fill-color: var(--cds-alias-status-alt, var(--cds-global-color-violet-700, #7c12a5))}:host([inverse]){--ring-color: var(--cds-alias-status-neutral-tint, var(--cds-global-color-construction-50, #f1f6f8));--fill-color: var(--cds-alias-status-neutral, var(--cds-global-color-construction-600, #4f6169))}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
`;
//# sourceMappingURL=progress-circle.element.css.js.map