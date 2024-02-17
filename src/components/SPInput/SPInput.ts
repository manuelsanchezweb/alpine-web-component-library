class SPInput extends HTMLElement {
  connectedCallback() {
    const type = this.getAttribute('type') || 'text'
    const placeholder = this.getAttribute('placeholder') || ''
    const value = this.getAttribute('value') || ''
    const name = this.getAttribute('name') || ''
    const id = this.getAttribute('id') || ''
    const extraClasses = this.getAttribute('extra-classes') || ''
    this.innerHTML = `
        <input id="${id}" name="${name}" type="${type}" placeholder="${placeholder}" value="${value}" class="border border-black py-2 px-4 w-fit focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-sm ${extraClasses}">
      `
  }

  static get observedAttributes() {
    return ['type', 'placeholder', 'value', 'extra-classes', 'name', 'id']
  }

  attributeChangedCallback() {
    this.connectedCallback()
  }
}

export default SPInput
