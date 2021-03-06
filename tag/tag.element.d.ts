import { CdsBaseButton, StatusTypes } from '@cds/core/internal';
/**
 * Tags show concise metadata in a compact format.
 * Tags are visually styled to differentiate them from buttons.
 *
 * ```typescript
 * import '@cds/core/tag/register.js';
 * ```
 *
 * ```html
 * <cds-tag status="info">Info</cds-tag>
 * ```
 *
 * @element cds-tag
 * @slot - Content slot for inside the tag
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --padding
 * @cssprop --size
 */
export declare class CdsTag extends CdsBaseButton {
    /**
     * @type {neutral | info | success | warning | danger}
     * Sets the color of the tag (and badge if present) from the following predefined list of statuses:
     */
    status: StatusTypes;
    /** Sets the color of the tag (and badge if present) from a predefined list of choices */
    color: 'gray' | 'purple' | 'blue' | 'orange' | 'light-blue';
    static get styles(): import("lit-element").CSSResult[];
    /** If present, shows a close icon to one side of the tag.
     *  Note that applications must wire up the action to remove the tag on click and also
     *  that you cannot have a clickable AND closable tag. The closable attribute-property
     *  shows the close icon. What happens when the tag is clicked is for application developers
     *  to decide.
     *  If closable is present, the tag will be considered "clickable".
     */
    closable: boolean;
    private groupLabelId;
    connectedCallback(): void;
    updated(props: Map<string, string | boolean | null | undefined>): void;
    render(): import("lit-element").TemplateResult;
}
