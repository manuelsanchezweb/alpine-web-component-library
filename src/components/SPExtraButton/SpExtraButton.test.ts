import { describe, it, expect, beforeEach } from 'vitest'
import SPExtraButton from './SPExtraButton'

describe('SPExtraButton', () => {
  let element: HTMLElement

  beforeEach(() => {
    window.customElements.define('sp-extra-button', SPExtraButton)
    element = document.createElement('sp-extra-button')
    element.setAttribute('text', 'Test Button')
    element.setAttribute('extra-classes', 'bg-red-500')
    document.body.appendChild(element)
  })

  it('should be defined', () => {
    expect(customElements.get('sp-extra-button')).toBeDefined()
  })

  it('renders with provided text', () => {
    const button = element.querySelector('button') as HTMLButtonElement
    expect(button.innerText).toBe('Test Button')
  })

  it('includes extra classes', () => {
    const button = element.querySelector('button') as HTMLButtonElement
    expect(button.className).toContain('bg-red-500')
  })
})
