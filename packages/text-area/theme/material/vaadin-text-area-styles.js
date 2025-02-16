/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/text-field/theme/material/vaadin-input-field-shared-styles.js';

registerStyles(
  'vaadin-text-area',
  css`
    [part='input-field'] {
      height: auto;
      box-sizing: border-box;
    }

    .textarea-wrapper {
      margin-top: 4px;
      padding: 0;
    }

    [part='input-field'] ::slotted(textarea),
    .textarea-wrapper::after {
      padding: 0 0 8px;
    }

    [part='input-field'] ::slotted(textarea) {
      white-space: pre-wrap; /* override "nowrap" from <vaadin-text-field> */
      align-self: stretch; /* override "baseline" from <vaadin-text-field> */
    }
  `,
  { moduleId: 'material-text-area', include: ['material-input-field-shared-styles'] }
);
