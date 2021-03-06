import { StatusTypes } from '@cds/core/internal';
import { LitElement } from 'lit-element';
/**
 * Circular progress indicators provide a method to track how close long-running tasks are to
 * completion. Circular progress offer a compact way to track progress in a variety of situations.
 *
 * ```typescript
 * import '@cds/core/progress-circle/register.js';
 * ```
 *
 * ```html
 * <cds-progress-circle status="info" value="25"></cds-progress-circle>
 * ```
 * @beta
 * @element cds-progress-circle
 * @cssprop --ring-color
 * @cssprop --ring-opacity
 * @cssprop --fill-color
 */
export declare class CdsProgressCircle extends LitElement {
    private _size;
    /**
     * @type {neutral | info | success | warning | danger}
     * Sets the color of the badge
     */
    status: StatusTypes;
    /**
     * Inverts color of circular progress bar if `true`.
     * Useful for displaying icons on a dark background.
     */
    inverse: boolean;
    /**
     * Represents the percent completed from 0 to 100.
     *
     * If undefined, the progress-circle will be represented as an indeterminate
     * progress indicator – a.k.a a "spinner".
     */
    value: number;
    /**
     * Represents the thickness of the stroke of the circular progress.
     *
     * If undefined, it defaults to 3.
     */
    line: number;
    private get radius();
    private get circumference();
    /** @private */
    get progress(): number;
    private get progressOffset();
    get size(): string;
    /**
     * @type {string | sm | md | lg | xl | xxl}
     * Apply numerical width-height or a t-shirt-sized CSS classname
     */
    set size(val: string);
    private setAriaAttributes;
    connectedCallback(): void;
    updated(props: Map<string, any>): void;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
}
