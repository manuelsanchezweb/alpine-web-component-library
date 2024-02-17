import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Adjust the path to go up one directory from the script's location
const coverageFilePath = join(
  __dirname,
  '..',
  'coverage',
  'coverage-final.json'
)
const coverageData = JSON.parse(readFileSync(coverageFilePath, 'utf8'))

let totalStatements = 0
let coveredStatements = 0

Object.values(coverageData).forEach((file) => {
  Object.values(file.s).forEach((count) => {
    totalStatements += 1 // Each key in `s` is a statement, so count each one
    coveredStatements += count > 0 ? 1 : 0 // If count > 0, statement was covered
  })
})

const coveragePercentage =
  totalStatements > 0
    ? ((coveredStatements / totalStatements) * 100).toFixed(2)
    : '0.00'

console.log(`Coverage: ${coveragePercentage}%`)
