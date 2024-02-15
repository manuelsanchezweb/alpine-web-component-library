/// <reference types="vite/client" />

import { Alpine as AlpineType } from 'alpinejs'

declare global {
  var Alpine: AlpineType
}

declare module 'alpinejs-component'
