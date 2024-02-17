import { describe, it, expect, beforeEach } from 'vitest'
import SPButton from './SPButton'

describe('SPButton', () => {
  let element: HTMLElement

  beforeEach(() => {
    window.customElements.define('sp-button', SPButton)
    element = document.createElement('sp-button')
    document.body.appendChild(element)
  })

  it('should be defined', () => {
    expect(customElements.get('sp-button')).toBeDefined()
  })

  it('renders with default text', () => {
    const button = element.querySelector('button') as HTMLButtonElement
    expect(button.innerText).toBe('Click me')
  })
})
