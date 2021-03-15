import { css } from 'lit-element';
/* @internal */
export const styles = css `:host{--container-padding: var(--cds-global-space-2, 0.1rem) 0;--min-height: var(--cds-global-space-9, 1.2rem);--color: var(--cds-global-typography-color-500, var(--cds-global-color-gray-1000, #000));--font-size: var(--cds-global-typography-body-font-size, 0.7rem);--font-weight: var(--cds-global-typography-body-font-weight, 400);--letter-spacing: var(--cds-global-typography-body-letter-spacing, -0.01429em);--icon-size: var(--cds-global-space-8, 0.9rem);--icon-color: var(--color);width:100%}.private-host{min-height:var(--min-height);color:var(--color)}:host([_type='default']){--font-size: var(--cds-global-typography-font-size-3, 0.65rem)}:host([_type='default']) ::slotted(cds-alert-actions),:host([_type='banner']) ::slotted(cds-alert-actions){--action-size: calc(var(--min-height) - var(--cds-global-space-4, 0.3rem));white-space:nowrap;display:block}:host([_type='banner']){--icon-size: var(--cds-global-space-9, 1.2rem)}.alert-status-icon,::slotted(cds-icon){height:var(--icon-size);width:var(--icon-size);--color: var(--icon-color)}cds-internal-close-button{--color: inherit}.alert-content-wrapper,.alert-icon-wrapper{display:flex;min-height:var(--cds-global-space-6, 0.6rem);padding:var(--container-padding)}.alert-icon-wrapper{min-width:var(--icon-size)}.alert-content-wrapper{display:inline-flex;align-items:center;transform:translateY(var(--cds-global-space-1, 0.05rem))}.alert-content-wrapper{color:var(--color);font-size:var(--font-size);font-weight:var(--font-weight);letter-spacing:var(--letter-spacing);line-height:var(--cds-global-typography-body-line-height, 1.42857em)}::slotted(cds-alert-actions){--action-text-color: var(--color);--action-size: var(--cds-global-typography-body-line-height, 1.42857em);display:none}:host([_type='default']) cds-internal-close-button{height:var(--cds-global-space-8, 0.9rem)}:host([_type='default']) .alert-content-wrapper{align-items:self-start}:host([_type='light'][status='info']){--icon-color: var(--cds-alias-status-info, var(--cds-global-color-blue-700, #0079ad))}:host([_type='light'][status='success']){--icon-color: var(--cds-alias-status-success, var(--cds-global-color-green-700, #42810e))}:host([_type='light'][status='warning']){--icon-color: var(--cds-alias-status-warning-dark, var(--cds-global-color-ochre-800, #a36500))}:host([_type='light'][status='danger']){--icon-color: var(--cds-alias-status-danger, var(--cds-global-color-red-700, #e02200))}:host([status='loading'][_type='default']) .alert-spinner{--ring-color: var(--cds-alias-object-opacity-200, rgba(0,0,0,0.4))}:host([status='loading'][_type='banner']) .alert-spinner{--ring-color: var(--cds-alias-object-opacity-200, rgba(0,0,0,0.4));--fill-color: var(--icon-color)}:host([size='sm']:not([_type='banner'])){--font-size: var(--cds-global-typography-font-size-1, 0.55rem);--letter-spacing: normal}:host([_type='banner']) .alert-content-wrapper{transform:none;min-height:var(--cds-global-space-10, 1.6rem)}:host([_type='banner']){--color: var(--cds-global-typography-color-100, var(--cds-global-color-gray-0, #fff))}:host([_type='default'][status='warning']),:host([_type='banner'][status='warning']){--color: var(--cds-global-color-gray-1000, #000)}:host([_type='default'][status='warning']) cds-alert-actions,:host([_type='banner'][status='warning']) cds-alert-actions{--action-hover-text-color: var(--color);--action-text-color: var(--color)}:host([_type='banner']) .spinner{height:calc(var(--cds-global-space-8, 0.9rem) + var(--cds-global-space-2, 0.1rem));width:calc(var(--cds-global-space-8, 0.9rem) + var(--cds-global-space-2, 0.1rem));min-height:calc(var(--cds-global-space-8, 0.9rem) + var(--cds-global-space-2, 0.1rem));min-width:calc(var(--cds-global-space-8, 0.9rem) + var(--cds-global-space-2, 0.1rem));margin-top:var(--cds-global-space-2, 0.1rem)}:host([_type='banner']) cds-internal-close-button{height:var(--cds-global-space-9, 1.2rem);margin-top:var(--cds-global-space-3, 0.2rem)}@supports (-moz-appearance: none) and (text-emphasis: none){:host(:not([_type='banner']):not([size='sm'])) .alert-content{transform:translateY(calc(-1 * var(--cds-global-space-2, 0.1rem)))}}
`;
//# sourceMappingURL=alert.element.css.js.map