import yargs from 'yargs/yargs'
import chalk from 'chalk'
import fs from 'fs'

const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv
const isWin: boolean = process.platform === 'win32'

// get packagesFolder path
let packagesFolder = ''
if (isWin) {
  packagesFolder =
    __dirname.substr(0, __dirname.lastIndexOf('\\')) + '\\packages\\'
} else {
  packagesFolder =
    __dirname.substr(0, __dirname.lastIndexOf('/')) + '/packages/'
}

// check package name
const newPackageName: string = argv._[0] as string
if (!newPackageName) {
  console.log(chalk.red('🛑 Package name is empty.'))
  process.exit(0)
}
const validNPMPackageName = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/
if (!validNPMPackageName.test(newPackageName)) {
  console.log(chalk.red('🛑 Not a valid package name'))
  process.exit(0)
}

// check package path
const newPackagePath: string = packagesFolder + newPackageName
if (fs.existsSync(newPackagePath)) {
  console.log(chalk.red('🛑 Component already exists!'))
  process.exit(0)
}

// create package path folder and sub folder
console.log('✅ created ' + newPackagePath)
fs.mkdirSync(newPackagePath)
fs.mkdirSync(newPackagePath + '/lib')

// button-group => ButtonGroup
const newPackageNameCamelCase: string = newPackageName
  .split('-') // ['button', 'group']
  .map(
    (partOfTheName) =>
      partOfTheName[0].toLocaleUpperCase() + partOfTheName.slice(1)
  ) // ['Button', 'Group']
  .join('') // 'ButtonGroup'

import indexVue from './templates/indexVue'
import packageJson from './templates/packageJson'
import indexTs from './templates/indexTs'

const filesToCreate = [
  {
    filepath: '/lib/index.vue',
    content: indexVue(
      { packageName: newPackageName },
      { packageNameCamelCase: newPackageNameCamelCase }
    ),
  },
  {
    filepath: '/package.json',
    content: packageJson({ packageName: newPackageName }),
  },
  {
    filepath: '/index.ts',
    content: indexTs({ packageNameCamelCase: newPackageNameCamelCase }),
  },
]

filesToCreate.forEach((file) => {
  const fileBuffer = new Uint8Array(Buffer.from(file.content))
  fs.writeFileSync(newPackagePath + file.filepath, fileBuffer)
  console.log(`✅ created ${newPackagePath}${file.filepath}`)
})

console.log('🚀 done creating ' + chalk.green(newPackageName) + '!')
