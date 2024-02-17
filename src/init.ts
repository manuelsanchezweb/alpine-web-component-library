import Alpine from 'alpinejs'
import { SPButton, SPExtraButton } from './components'

export function initSPWebComponents() {
  window.customElements.define('sp-button', SPButton)
  window.customElements.define('sp-extra-button', SPExtraButton)
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
}

export function initAlpine() {
  Alpine.store('items', {
    name: 'Web Components with Alpine.js',
    products: ['SPButton', 'SPButtonExtra'],
  })

  window.Alpine = Alpine

  Alpine.start()
}
