import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { Select } from '../vaadin-select.js';

registerStyles(
  'vaadin-select-overlay',
  css`
    :host([opening]),
    :host([closing]),
    :host([opening]) [part='overlay'],
    :host([closing]) [part='overlay'] {
      animation: none !important;
    }
  `
);

customElements.define('vaadin-select', Select);
