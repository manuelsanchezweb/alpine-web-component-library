/// <reference types="vite/client" />

import { Alpine as AlpineType } from 'alpinejs'

declare global {
  var Alpine: AlpineType
  var spButtonCode: string
  var spExtraButtonCode: string
  var spHeadlineCode: string
  var sidebar: () => {
    open: { above: boolean; below: boolean }
    isAboveBreakpoint: boolean
  }
}

declare module 'alpinejs-component'
