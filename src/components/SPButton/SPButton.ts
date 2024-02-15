class SPButton extends HTMLElement {
  constructor() {
    super() // Always call super first in constructor
    this.innerHTML = `<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded my-4">Click me</button>`
  }
}

export default SPButton
