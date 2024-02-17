import { describe, it, beforeEach, afterEach } from 'vitest'
import Alpine from 'alpinejs'
import SPToggleSwitch from './SPToggleSwitch'

window.customElements.define('sp-toggle-switch', SPToggleSwitch)
window.Alpine = Alpine
Alpine.start()

describe('SPToggleSwitch Component', () => {
  let toggle: HTMLElement

  beforeEach(() => {
    Alpine.store('config', { toggleOn: false })
    toggle = document.createElement('sp-toggle-switch')
  })

  afterEach(() => {
    document.body.removeChild(toggle)
  })

  // TODO: // unit test this properly with Alpine.js
  it('toggles on and off when clicked', async () => {
    document.body.appendChild(toggle)
  })
})
