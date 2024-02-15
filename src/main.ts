import './style.css'
import { SPButton, SPExtraButton } from './components'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export function initSPWebComponents() {
  window.customElements.define('sp-button', SPButton)
  window.customElements.define('sp-extra-button', SPExtraButton)
}

initSPWebComponents()

import Alpine from 'alpinejs'

Alpine.store('items', {
  name: 'Web Components with Alpine.js',
  products: ['SPButton', 'SPButtonExtra'],
})

window.Alpine = Alpine

Alpine.start()
