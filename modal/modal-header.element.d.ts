import { LitElement } from 'lit-element';
/**
 * Web component modal header to be used inside modal.
 *
 * ```typescript
 * import '@cds/core/modal/register.js';
 * ```
 *
 * ```html
 * <cds-modal>
 *   <cds-modal-header>
 *      <h3 cds-text="title">My Modal</h3>
 *   </cds-modal-header>
 *   <cds-modal-content>
 *     <p>Lorem Ipsum</p>
 *   </cds-modal-content>
 *   <cds-modal-actions>
 *       <cds-button>Ok</cds-button>
 *   </cds-modal-actions>
 * </cds-modal>
 * ```
 *
 * @element cds-modal-header
 */
export declare class CdsModalHeader extends LitElement {
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
}
