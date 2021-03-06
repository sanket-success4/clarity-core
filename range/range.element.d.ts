import { CdsControl } from '@cds/core/forms';
/**
 * Range
 *
 * ```typescript
 * import '@cds/core/range/register.js';
 * ```
 *
 * ```html
 * <cds-range>
 *   <label>range</label>
 *   <input type="range" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-range>
 * ```
 *
 * @element cds-range
 * @slot - For projecting range input
 * @cssprop --background
 * @cssprop --border-radius
 * @cssprop --track-background
 * @cssprop --track-fill-background
 * @cssprop --track-height
 * @cssprop --thumb-background
 * @cssprop --thumb-width
 * @cssprop --thumb-height
 */
export declare class CdsRange extends CdsControl {
    static get styles(): import("lit-element").CSSResult[];
    protected globalStyles: import("lit-element").CSSResult;
    protected get inputTemplate(): import("lit-element").TemplateResult;
    firstUpdated(props: Map<string, any>): void;
    private setTrackWidth;
}
