import { Directions, Orientations, StatusTypes } from '@cds/core/internal';
import { LitElement } from 'lit-element';
/**
 * Icon component that renders svg shapes that can be customized.
 * To load an icon, import the icon with the icon service.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { ClarityIcons, userIcon } from '@cds/core/icon';
 *
 * ClarityIcons.addIcons(userIcon);
 * ```
 *
 * ```html
 * <cds-icon shape="user"></cds-icon>
 * ```
 *
 * @element cds-icon
 * @cssprop --color
 * @cssprop --badge-color
 */
export declare class CdsIcon extends LitElement {
    static get styles(): import("lit-element").CSSResult[];
    private _shape;
    private _size;
    get shape(): string;
    /**
     * Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if
     * the specified icon cannot be found in the icon registry.
     */
    set shape(val: string);
    get size(): string;
    /**
     * @type {string | sm | md | lg | xl | xxl}
     * Apply numerical width-height or a t-shirt-sized CSS classname
     */
    set size(val: string);
    /**
     * @type {up | down | left | right}
     * Takes a directional value that rotates the icon 90° with the
     * top of the icon pointing in the specified direction.
     */
    direction: Directions;
    /**
     * @type {horizontal | vertical}
     * Takes an orientation value that reverses the orientation of the icon vertically or horizontally'
     */
    flip: Orientations;
    /**
     * Displays most icons in their "filled" version if set to `true`.
     */
    solid: boolean;
    /**
     * @type {info | success | warning | danger}
     * Changes color of icon fills and outlines
     */
    status: StatusTypes;
    /**
     * Inverts color of icon fills and outlines if `true`.
     * Useful for displaying icons on a dark background.
     */
    inverse: boolean;
    /**
     * @type {info | success | warning | danger | inherit | warning-triangle | inherit-triangle}
     * Sets the color of the icon decoration that appears in the top-right corner
     * of the glyph. The icon decoration is derived from the following predefined types.
     *
     * The color of the badge can change according to the following
     * list of statuses:
     * 'info'  -> blue dot
     * 'success' -> green dot
     * 'warning' -> yellow dot
     * 'danger' -> red dot
     * 'inherit' -> dot inherits color of full icon glyph
     * 'warning-triangle' -> yellow triangle
     * 'inherit-triangle' -> triangle inherits color of full icon glyph
     * unrecognized value, empty string, or true -> red dot
     *
     * By default, the badge displays a 'danger' dot (a red-colored dot).
     *
     * Setting the badge to 'false' or removing the attribute will remove the default icon badge.
     */
    badge: StatusTypes | 'inherit' | 'warning-triangle' | 'inherit-triangle' | true | false;
    /**
     * @private
     * given a pixel value offset any surrounding whitespace within the svg
     */
    innerOffset: number;
    private svg;
    private subscription;
    updated(props: Map<string, any>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-element").TemplateResult;
}
