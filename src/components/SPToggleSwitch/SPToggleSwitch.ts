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

// <div x-data="{ toggle : false }"
//     @click="toggle = ! toggle"
//     class="relative cursor-pointer h-6 w-12 rounded-full transition-all duration-300 ease-in-out bg-cyan-400" :class=" toggle ? 'bg-cyan-400' : 'bg-slate-400' ">
//     <span class="absolute h-6 w-6 rounded-full bg-white transition-all duration-300 ease-in-out" :class=" toggle ? 'translate-x-7' : '' "></span>
// </div>
