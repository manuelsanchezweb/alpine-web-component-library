class SPToggleSwitch extends HTMLElement {
  connectedCallback() {
    const extraClasses = this.getAttribute('extra-classes') || ''
    this.innerHTML = `
        <div x-data="{ on: $store.config.toggleOn }" @click="on = !on; $store.config.toggleOn = on" class="cursor-pointer ${extraClasses}">
          <div class="inline-block w-14 h-8 bg-gray-200 rounded-full p-1" :class="{'bg-blue-500': on, 'bg-gray-200': !on}">
            <div class="w-6 h-6 bg-white rounded-full shadow-md transform" :class="{'translate-x-6': on}"></div>
          </div>
          <span x-text="on ? 'On' : 'Off'"></span>
        </div>
      `
  }
}

export default SPToggleSwitch
