import { CdsControl } from '@cds/core/forms';
/**
 * Time Input
 *
 * ```typescript
 * import '@cds/core/file/register.js';
 * ```
 *
 * ```html
 * <cds-file>
 *   <label>file</label>
 *   <input type="file" />
 * </cds-file>
 * ```
 *
 * @element cds-file
 * @slot - For projecting file input and label
 */
export declare class CdsFile extends CdsControl {
    i18n: {
        browse: string;
        files: string;
        removeFile: string;
    };
    private buttonLabel;
    protected fixedControlWidth: boolean;
    protected supportsPrefixSuffixActions: boolean;
    static get styles(): import("lit-element").CSSResult[];
    protected get inputTemplate(): import("lit-element").TemplateResult;
    protected get clearFiles(): import("lit-element").TemplateResult;
    firstUpdated(props: Map<string, any>): void;
    private updateLabelAndFocus;
    constructor();
}
