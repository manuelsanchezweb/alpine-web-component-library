import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import SPInput from './SPInput'

describe('WSInput', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    window.customElements.define('sp-input', SPInput)
    container = document.createElement('sp-input') as HTMLDivElement
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
  })

  it('should be defined', () => {
    expect(customElements.get('sp-input')).toBeDefined()
  })

  it('should render an input text element', () => {
    container.innerHTML = `<sp-input id="name" type="text" placeholder="Enter your name" extra-classes="my-4"></sp-input>`
    const wsInput = container.querySelector('sp-input')
    const input = wsInput?.querySelector('input')
    expect(input?.type).toContain('text')
  })

  it('should render an input password element', () => {
    container.innerHTML = `<sp-input id="password" type="password" placeholder="Enter your password" extra-classes="my-4"></sp-input>`
    const wsInput = container.querySelector('sp-input')
    const input = wsInput?.querySelector('input')
    expect(input?.type).toContain('password')
  })

  it('should render an input email element', () => {
    container.innerHTML = `<sp-input id="email" type="email" placeholder="Enter your email" extra-classes="my-4"></sp-input>`
    const wsInput = container.querySelector('sp-input')
    const input = wsInput?.querySelector('input')
    expect(input?.type).toContain('email')
  })
})
