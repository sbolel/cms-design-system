/**
 * Entry point for web-components version of the component library
 *
 * This version necessarily has side-effects because defining custom elements
 * in a web page changes the global state of JavaScript in that page; this
 * module therefore needs to be marked as having side effects in the package
 * file in order to let bundlers know not to remove all the web-component
 * modules during tree-shaking.
 */

export * from '../analytics';
export * from '../flags';
export * from '../i18n';

export * from './ds-alert';
export * from './ds-badge';
export * from './ds-button';
export * from './ds-usa-banner';
