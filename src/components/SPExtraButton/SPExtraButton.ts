class SPExtraButton extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const text = this.getAttribute('text') || 'Default Text'
    const extraClasses = this.getAttribute('extra-classes') || ''

    this.innerHTML = `<button class="bg-blue-500 my-4 text-white font-bold py-2 px-4 rounded ${extraClasses}">${text}</button>`
  }
}

export default SPExtraButton
