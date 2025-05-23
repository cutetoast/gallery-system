// ***********************************************************
// This support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import './account';
import './commands';
import './navbar';
import './entity';
import './management';

declare global {
  namespace Cypress {
    interface Chainable {
      waitForElement(selector: string, options?: { timeout?: number; interval?: number }): Chainable<JQuery<HTMLElement>>;
    }
  }
}

// Configure global behavior
Cypress.on('uncaught:exception', err => {
  // returning false here prevents Cypress from failing the test
  console.log('Uncaught exception:', err);
  return false;
});

// Add custom command for more reliable element waiting
Cypress.Commands.add('waitForElement', (selector: string, options = {}) => {
  const defaults = {
    timeout: 10000,
    interval: 100,
  };
  const opts = { ...defaults, ...options };

  return new Cypress.Promise((resolve, reject) => {
    const checkElement = () => {
      const el = Cypress.$(selector);
      if (el.length) {
        resolve(el);
      } else if ((opts.timeout -= opts.interval) < 0) {
        reject(new Error(`Could not find element: ${selector}`));
      } else {
        setTimeout(checkElement, opts.interval);
      }
    };

    checkElement();
  });
});
