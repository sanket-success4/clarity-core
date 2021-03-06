import { LitElement } from 'lit-element';
/**
 * Dropdown, example test component. Do not use in production.
 *
 * ```typescript
 * import '@cds/core/test-dropdown';
 * ```
 *
 * ```html
 * <cds-test-dropdown title="click me!">
 *   Hello World
 * </cds-test-dropdown>
 * ```
 *
 * @beta
 * @slot - Content slot for dropdown content
 * @event {boolean} openChange - notify open state change of dropdown
 * @cssprop --border-color
 * @cssprop --background-color
 * @cssprop --text-color
 */
export declare class CdsTestDropdown extends LitElement {
    private openChange;
    private _open;
    get open(): boolean;
    /** Set open to open or close the dropdown */
    set open(value: boolean);
    /** Set the dropdown button text */
    title: string;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
    /** Toggle the current open state of the dropdown */
    toggle(): void;
}
