import '@cds/core/icon/register.js';
import { CdsButton } from './button.element.js';
import { CdsIconButton } from './icon-button.element.js';
import { CdsInlineButton } from './inline-button.element.js';
declare global {
    interface HTMLElementTagNameMap {
        'cds-button': CdsButton;
        'cds-icon-button': CdsIconButton;
        'cds-inline-button': CdsInlineButton;
    }
}
