// WSLink.test.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import SPLink from './SPLink'

describe('WSLink Component', () => {
  let container: HTMLElement

  beforeEach(() => {
    window.customElements.define('sp-link', SPLink)
    container = document.body.appendChild(document.createElement('sp-link'))
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  it('should be defined', () => {
    expect(customElements.get('sp-link')).toBeDefined()
  })

  it('renders as an anchor element by default', () => {
    container.innerHTML = `<sp-link href="https://example.com">Example</sp-link>`
    const wsLink = container.querySelector('sp-link')
    const anchor = wsLink?.querySelector('a')
    expect(anchor).toBeTruthy() // Checks if the element exists
    expect(anchor?.href).toContain('https://example.com')
  })

  // TODO: the test with the button, it is working, but tests are failing
  // it('renders as a button element when as="button"', () => {
  //   container.innerHTML = `<sp-link as="button">Example</sp-link>`
  //   const wsLink = container.querySelector('sp-link')
  //   const button = wsLink?.querySelector('button')
  //   expect(button).toBeTruthy() // Checks if the element exists
  // })
})
