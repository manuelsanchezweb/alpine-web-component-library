import Alpine from 'alpinejs'
import {
  SPButton,
  SPExtraButton,
  SPHeadline,
  SPInput,
  SPLink,
  SPToggleSwitch,
} from './components'

export function initSPWebComponents() {
  window.customElements.define('sp-button', SPButton)
  window.customElements.define('sp-extra-button', SPExtraButton)
  window.customElements.define('sp-link', SPLink)
  window.customElements.define('sp-toggle-switch', SPToggleSwitch)
  window.customElements.define('sp-input', SPInput)
  window.customElements.define('sp-headline', SPHeadline)
}

export function initPrismJSCodeHighlighting() {
  // Assuming spButtonCode is defined as a global variable or imported from a module
  window.spButtonCode = `class SPButton extends HTMLElement {
    constructor() {
    super(); // Always call super first in constructor
    this.innerHTML = \`<button class="bg-blue-500 my-4 text-white font-bold py-2 px-4 rounded">Click me</button>\`
      }
    }
    
  customElements.define('sp-button', SPButton);`

  window.spExtraButtonCode = `class SPExtraButton extends HTMLElement {
    constructor() {
    super();
    this.render();
    }
    
    connectedCallback() {
    this.render();
    }
    
    render() {
    const text = this.getAttribute('text') || 'Default Text';
    const extraClasses = this.getAttribute('extra-classes') || '';
    
    this.innerHTML = \`<button class="bg-blue-500 my-4 text-white font-bold py-2 px-4 rounded \${extraClasses}">\${text}</button>\`;
    }
  }
    
  customElements.define('sp-extra-button', SPExtraButton);`

  window.spHeadlineCode = `
  import install from '@twind/with-web-components';
  import config from '@config/twind.config.js';
  
  const withTwind = install(config);
  
  export class SPHeadline extends withTwind(HTMLElement) {
      constructor() {
          super();
  
          const shadow = this.attachShadow({ mode: 'open' });
  
          const tag = this.getAttribute('as') || 'h1';
          const extraClasses = this.getAttribute('extraClasses') || '';
  
          const getHeadlineClasses = () => {
              if (tag === 'h1') {
                  return 'text-3xl';
              } else if (tag === 'h2') {
                  return 'text-2xl';
              } else if (tag === 'h3') {
                  return 'text-xl';
              } else if (tag === 'h4') {
                  return 'text-lg';
              } else if (tag === 'h5') {
                  return 'text-base';
              } else if (tag === 'h6') {
                  return 'text-sm';
              }
          };
  
          shadow.innerHTML = \`<\${tag} class="text-blue-500 \${getHeadlineClasses()} font-bold mb-4 p-4 border border-black \${extraClasses}">
              <slot></slot>
          </\${tag}>\`;
      }
  }
  
  export default SPHeadline;
  
  customElements.define('sp-headline', SPHeadline);
  `
}

export function initAlpine() {
  Alpine.store('items', {
    name: 'Web Components with Alpine.js',
    products: ['SPButton', 'SPButtonExtra'],
  })

  Alpine.store('config', {
    toggleOn: false,
  })

  window.Alpine = Alpine

  Alpine.start()
}
