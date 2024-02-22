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

  window.spHeadlineCodeExample = `<!-- h1 headline -->
<sp-headline as="h1" extraClasses="w-fit p-0">This is H1</sp-headline>

<!-- h2 headline with extra classes for styling -->
<sp-headline as="h2" extraClasses="w-fit p-0">This is H2</sp-headline>

<!-- h3 headline with extra classes for styling -->
<sp-headline as="h3" extraClasses="w-fit p-0">This is H3</sp-headline>

<!-- h4 headline with extra classes for styling -->
<sp-headline as="h4" extraClasses="w-fit p-0">This is H4</sp-headline>

<!-- h5 headline with extra classes for styling -->
<sp-headline as="h5" extraClasses="w-fit p-0">This is H5</sp-headline>

<!-- h6 headline with extra classes for styling -->
<sp-headline as="h6" extraClasses="w-fit p-0">This is H6</sp-headline>
`

  window.spInputCodeExample = `<sp-input id="name" name="text" type="text" placeholder="Enter your name" extra-classes="my-4"></sp-input>

<sp-input id="email" name="email" type="email" placeholder="Enter your email" extra-classes="my-4"></sp-input>
`

  window.spToggleSwitchCode = `class SPToggleSwitch extends HTMLElement {
  connectedCallback() {
    const extraClasses = this.getAttribute('extra-classes') || '';
    this.innerHTML = \`
        <div x-data="{ on: $store.config.toggleOn }" @click="on = !on; $store.config.toggleOn = on" class="cursor-pointer \${extraClasses}">
          <div class="inline-block w-14 h-8 bg-gray-200 rounded-full p-1" :class="{'bg-blue-500': on, 'bg-gray-200': !on}">
            <div class="w-6 h-6 bg-white rounded-full shadow-md transform" :class="{'translate-x-6': on}"></div>
          </div>
          <span x-text="on ? 'On' : 'Off'"></span>
        </div>
      \`
  }
}

export default SPToggleSwitch;
`

  window.spLinkCode = `class SPLink extends HTMLElement {
    hasRendered = false;
  
    constructor() {
      super();
      this.renderElement();
    }
  
    connectedCallback() {
      this.renderElement();
    }
  
    static get observedAttributes() {
      return ['as', 'title', 'aria-label', 'href', 'target', 'rel'];
    }
  
    attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
      if (oldValue !== newValue) {
        this.renderElement();
      }
    }
  
    renderElement() {
      if (!this.hasRendered) {
        const elementType = this.getAttribute('as') || 'anchor';
  
        // Temporarily store the inner content
        const innerContent = document.createElement('div');
        while (this.firstChild) {
          innerContent.appendChild(this.firstChild); // Move all children to temporary container
        }
  
        const container = elementType === 'button' ? document.createElement('button') : document.createElement('a');
  
        this.appendChild(container);
  
        while (innerContent.firstChild) {
          container.appendChild(innerContent.firstChild); // Move all children back to the container
        }
  
        this.hasRendered = true; // Mark as rendered
      } else {
        const container = this.querySelector('button, a');
        if (container) {
          const title = this.getAttribute('title');
          const ariaLabel = this.getAttribute('aria-label');
          const href = this.getAttribute('href');
          const target = this.getAttribute('target');
          const rel = this.getAttribute('rel');
          const onclick = this.getAttribute('onclick');
  
          if (title) {
            this.removeAttribute('title');
            container.setAttribute('title', title);
          }
  
          if (ariaLabel) {
            this.removeAttribute('aria-label');
            container.setAttribute('aria-label', ariaLabel);
          }
  
          if (onclick) {
            this.removeAttribute('onclick');
            container.setAttribute('onclick', onclick);
          }
  
          if (container.tagName.toLowerCase() === 'a') {
            if (href) {
              this.removeAttribute('href');
              container.setAttribute('href', href);
            }
  
            if (target) {
              this.removeAttribute('target');
              container.setAttribute('target', target);
            }
  
            if (rel) {
              this.removeAttribute('rel');
              container.setAttribute('rel', rel);
            }
          }
        }
      }
    }
  }
  
  export default SPLink;`

  window.spLinkCodeExample = `<sp-link href="https://www.google.com"> I am an anchor </sp-link>

<sp-link
    href="https://www.google.com"
    target="_blank"
    title="Open Google on a new tab"
  >
    I am an anchor with href and title
</sp-link>

<sp-link as="button" aria-label="Click me" onclick="alert('top')">
    <span>I am button</span>
    <svg
      ...
    </svg>
</sp-link>
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
