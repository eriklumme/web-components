import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import { ElementMixin } from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import { UploadEventMap, UploadFile, UploadI18n, UploadMethod } from './interfaces';

/**
 * `<vaadin-upload>` is a Web Component for uploading multiple files with drag and drop support.
 *
 * Example:
 *
 * ```
 * <vaadin-upload></vaadin-upload>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `primary-buttons` | Upload container
 * `upload-button` | Upload button
 * `drop-label` | Label for drop indicator
 * `drop-label-icon` | Icon for drop indicator
 * `file-list` | File list container
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part name
 * ---|---|---
 * `nodrop` | Set when drag and drop is disabled (e. g., on touch devices) | `:host`
 * `dragover` | A file is being dragged over the element | `:host`
 * `dragover-valid` | A dragged file is valid with `maxFiles` and `accept` criteria | `:host`
 *
 * See [Styling Components](https://vaadin.com/docs/latest/ds/customization/styling-components) documentation.
 *
 * @fires {CustomEvent} file-reject - Fired when a file cannot be added to the queue due to a constrain.
 * @fires {CustomEvent} files-changed - Fired when the `files` property changes.
 * @fires {CustomEvent} max-files-reached-changed - Fired when the `maxFilesReached` property changes.
 * @fires {CustomEvent} upload-before - Fired before the XHR is opened.
 * @fires {CustomEvent} upload-start - Fired when the XHR is sent.
 * @fires {CustomEvent} upload-progress - Fired as many times as the progress is updated.
 * @fires {CustomEvent} upload-success - Fired in case the upload process succeeded.
 * @fires {CustomEvent} upload-error - Fired in case the upload process failed.
 * @fires {CustomEvent} upload-request - Fired when the XHR has been opened but not sent yet.
 * @fires {CustomEvent} upload-response - Fired when on the server response before analyzing it.
 * @fires {CustomEvent} upload-retry - Fired when retry upload is requested.
 * @fires {CustomEvent} upload-abort - Fired when upload abort is requested.
 */
declare class UploadElement extends ThemableMixin(ElementMixin(HTMLElement)) {
  /**
   * Define whether the element supports dropping files on it for uploading.
   * By default it's enabled in desktop and disabled in touch devices
   * because mobile devices do not support drag events in general. Setting
   * it false means that drop is enabled even in touch-devices, and true
   * disables drop in all devices.
   */
  nodrop: boolean;

  /**
   * The server URL. The default value is an empty string, which means that
   * _window.location_ will be used.
   */
  target: string;

  /**
   * HTTP Method used to send the files. Only POST and PUT are allowed.
   */
  method: UploadMethod;

  /**
   * Key-Value map to send to the server. If you set this property as an
   * attribute, use a valid JSON string, for example:
   * ```
   * <vaadin-upload headers='{"X-Foo": "Bar"}'></vaadin-upload>
   * ```
   */
  headers: object | string | null;

  /**
   * Max time in milliseconds for the entire upload process, if exceeded the
   * request will be aborted. Zero means that there is no timeout.
   */
  timeout: number;

  /**
   * The array of files being processed, or already uploaded.
   *
   * Each element is a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)
   * object with a number of extra properties  to track the upload process:
   * - `uploadTarget`: The target URL used to upload this file.
   * - `elapsed`: Elapsed time since the upload started.
   * - `elapsedStr`: Human-readable elapsed time.
   * - `remaining`: Number of seconds remaining for the upload to finish.
   * - `remainingStr`: Human-readable remaining time for the upload to finish.
   * - `progress`: Percentage of the file already uploaded.
   * - `speed`: Upload speed in kB/s.
   * - `size`: File size in bytes.
   * - `totalStr`: Human-readable total size of the file.
   * - `loaded`: Bytes transferred so far.
   * - `loadedStr`: Human-readable uploaded size at the moment.
   * - `status`: Status of the upload process.
   * - `error`: Error message in case the upload failed.
   * - `abort`: True if the file was canceled by the user.
   * - `complete`: True when the file was transferred to the server.
   * - `uploading`: True while transferring data to the server.
   */
  files: UploadFile[];

  /**
   * Limit of files to upload, by default it is unlimited. If the value is
   * set to one, native file browser will prevent selecting multiple files.
   * @attr {number} max-files
   */
  maxFiles: number;

  /**
   * Specifies if the maximum number of files have been uploaded
   * @attr {boolean} max-files-reached
   */
  readonly maxFilesReached: boolean;

  /**
   * Specifies the types of files that the server accepts.
   * Syntax: a comma-separated list of MIME type patterns (wildcards are
   * allowed) or file extensions.
   * Notice that MIME types are widely supported, while file extensions
   * are only implemented in certain browsers, so avoid using it.
   * Example: accept="video/*,image/tiff" or accept=".pdf,audio/mp3"
   */
  accept: string;

  /**
   * Specifies the maximum file size in bytes allowed to upload.
   * Notice that it is a client-side constraint, which will be checked before
   * sending the request. Obviously you need to do the same validation in
   * the server-side and be sure that they are aligned.
   * @attr {number} max-file-size
   */
  maxFileSize: number;

  /**
   * Specifies the 'name' property at Content-Disposition
   * @attr {string} form-data-name
   */
  formDataName: string;

  /**
   * Prevents upload(s) from immediately uploading upon adding file(s).
   * When set, you must manually trigger uploads using the `uploadFiles` method
   * @attr {boolean} no-auto
   */
  noAuto: boolean;

  /**
   * Set the withCredentials flag on the request.
   * @attr {boolean} with-credentials
   */
  withCredentials: boolean;

  /**
   * Pass-through to input's capture attribute. Allows user to trigger device inputs
   * such as camera or microphone immediately.
   */
  capture: string | null | undefined;

  /**
   * The object used to localize this component.
   * For changing the default localization, change the entire
   * _i18n_ object or just the property you want to modify.
   *
   * The object has the following JSON structure and default values:
   *
   * ```
   * {
   *   dropFiles: {
   *     one: 'Drop file here',
   *     many: 'Drop files here'
   *   },
   *   addFiles: {
   *     one: 'Select File...',
   *     many: 'Upload Files...'
   *   },
   *   cancel: 'Cancel',
   *   error: {
   *     tooManyFiles: 'Too Many Files.',
   *     fileIsTooBig: 'File is Too Big.',
   *     incorrectFileType: 'Incorrect File Type.'
   *   },
   *   uploading: {
   *     status: {
   *       connecting: 'Connecting...',
   *       stalled: 'Stalled',
   *       processing: 'Processing File...',
   *       held: 'Queued'
   *     },
   *     remainingTime: {
   *       prefix: 'remaining time: ',
   *       unknown: 'unknown remaining time'
   *     },
   *     error: {
   *       serverUnavailable: 'Server Unavailable',
   *       unexpectedServerError: 'Unexpected Server Error',
   *       forbidden: 'Forbidden'
   *     }
   *   },
   *   file: {
   *     retry: 'Retry',
   *     start: 'Start',
   *     clear: 'Clear'
   *   },
   *   units: {
   *     size: ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
   *     sizeBase: 1000
   *   },
   *   formatSize: function(bytes) {
   *     // returns the size followed by the best suitable unit
   *   },
   *   formatTime: function(seconds, [secs, mins, hours]) {
   *     // returns a 'HH:MM:SS' string
   *   }
   * }
   * ```
   *
   * @type {!UploadI18n}
   * @default {English}
   */
  i18n: UploadI18n;

  /**
   * Triggers the upload of any files that are not completed
   *
   * @param files Files being uploaded. Defaults to all outstanding files
   */
  uploadFiles(files?: UploadFile | UploadFile[]): void;

  /**
   * Add the file for uploading. Called internally for each file after picking files from dialog or dropping files.
   *
   * @param file File being added
   */
  _addFile(file: UploadFile): void;

  /**
   * Remove file from upload list. Called internally if file upload was canceled.
   *
   * @param file File to remove
   */
  _removeFile(file: UploadFile): void;

  addEventListener<K extends keyof UploadEventMap>(
    type: K,
    listener: (this: UploadElement, ev: UploadEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void;

  removeEventListener<K extends keyof UploadEventMap>(
    type: K,
    listener: (this: UploadElement, ev: UploadEventMap[K]) => void,
    options?: boolean | EventListenerOptions
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin-upload': UploadElement;
  }
}

export { UploadElement };
