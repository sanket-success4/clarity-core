import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';
import { CdsInternalCloseButton } from './close-button.element.js';
declare global {
    interface HTMLElementTagNameMap {
        'cds-internal-close-button': CdsInternalCloseButton;
    }
}
