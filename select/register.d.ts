import { CdsSelect } from './select.element.js';
import '@cds/core/forms/register.js';
import '@cds/core/icon/register.js';
declare global {
    interface HTMLElementTagNameMap {
        'cds-select': CdsSelect;
    }
}
