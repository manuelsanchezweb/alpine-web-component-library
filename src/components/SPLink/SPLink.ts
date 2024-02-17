class SPLink extends HTMLElement {
  hasRendered = false

  constructor() {
    super()
    this.renderElement()
  }

  connectedCallback() {
    this.renderElement()
  }

  static get observedAttributes() {
    return ['as', 'title', 'aria-label', 'href', 'target', 'rel']
  }

  attributeChangedCallback(_name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.renderElement()
    }
  }

  renderElement() {
    if (!this.hasRendered) {
      const elementType = this.getAttribute('as') || 'anchor'

      // Temporarily store the inner content
      const innerContent = document.createElement('div')
      while (this.firstChild) {
        innerContent.appendChild(this.firstChild) // Move all children to temporary container
      }

      const container =
        elementType === 'button'
          ? document.createElement('button')
          : document.createElement('a')

      this.appendChild(container)

      while (innerContent.firstChild) {
        container.appendChild(innerContent.firstChild) // Move all children back to the container
      }

      this.hasRendered = true // Mark as rendered
    } else {
      const container = this.querySelector('button, a')
      if (container) {
        const title = this.getAttribute('title')
        const ariaLabel = this.getAttribute('aria-label')
        const href = this.getAttribute('href')
        const target = this.getAttribute('target')
        const rel = this.getAttribute('rel')
        const onclick = this.getAttribute('onclick')

        if (title) {
          this.removeAttribute('title')
          container.setAttribute('title', title)
        }

        if (ariaLabel) {
          this.removeAttribute('aria-label')
          container.setAttribute('aria-label', ariaLabel)
        }

        if (onclick) {
          this.removeAttribute('onclick')
          container.setAttribute('onclick', onclick)
        }

        if (container.tagName.toLowerCase() === 'a') {
          if (href) {
            this.removeAttribute('href')
            container.setAttribute('href', href)
          }

          if (target) {
            this.removeAttribute('target')
            container.setAttribute('target', target)
          }

          if (rel) {
            this.removeAttribute('rel')
            container.setAttribute('rel', rel)
          }
        }
      }
    }
  }
}

export default SPLink
