/// <reference types="vite/client" />

import { Alpine as AlpineType } from 'alpinejs'

declare global {
  var Alpine: AlpineType
  var spButtonCode: string
  var spExtraButtonCode: string
  var spHeadlineCode: string
  var spHeadlineCodeExample: string
  var spLinkCode: string
  var spToggleSwitchCode: string
  var spToggleSwitchCodeExample: string
  var spLinkCodeExample: string
  var spInputCode: string
  var spInputCodeExample: string
  var sidebar: () => {
    open: { above: boolean; below: boolean }
    isAboveBreakpoint: boolean
  }
}

declare module 'alpinejs-component'
