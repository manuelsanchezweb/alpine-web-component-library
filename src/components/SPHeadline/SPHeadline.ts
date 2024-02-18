import install from '@twind/with-web-components'
import config from '@config/twind.config'

const withTwind = install(config)

export class SPHeadline extends withTwind(HTMLElement) {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const tag = this.getAttribute('as') || 'h1'
    const extraClasses = this.getAttribute('extraClasses') || ''

    const getHeadlineClasses = () => {
      if (tag === 'h1') {
        return 'text-3xl'
      } else if (tag === 'h2') {
        return 'text-2xl'
      } else if (tag === 'h3') {
        return 'text-xl'
      } else if (tag === 'h4') {
        return 'text-lg'
      } else if (tag === 'h5') {
        return 'text-base'
      } else if (tag === 'h6') {
        return 'text-sm'
      }
    }

    shadow.innerHTML = `
        <${tag} class="text-blue-500 ${getHeadlineClasses()} font-bold mb-4 p-4 border border-black ${extraClasses}">
            <slot></slot>
        </${tag}>
    `
  }
}

export default SPHeadline
