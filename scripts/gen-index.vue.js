/**
 * 该文件主要为了自动生成第一版index.vue，大幅度减少文档书写工作量
 */

let fs = require('fs')
// API
let category = 'plugins'
let goal = 'circular-ripple'

let path = `../src/usages/${category}/${goal}`

// template text
let templateContent = `<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="''"> </mad-code-block>
  </mad-doc-page>
</template>

`

let scriptContent = `<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

<!--usagesImports-->

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    <!--usageComponents-->
  },
  data() {
    return {
        <!--usageCodes-->
    }
  },
}
</script>

`

let styleContent = `<style scoped></style>`

let usagesImports = ''
let usageComponents = ''
let usageCodes = ''

if (fs.existsSync(path)) {
  let usageFiles = fs.readdirSync(path).filter((file) => {
    return file.startsWith('Mad') && file.endsWith('.vue')
  })

  usageFiles.map((file, index, files) => {
    let fileName = file.replace('.vue', '')
    // usagesImports
    // component import
    let importComponent = `import ${fileName} from '@/usages/${category}/${goal}/${fileName}'`
    importComponent += '\n'
    usagesImports += importComponent

    // component code import
    let importComponentCode = `import ${fileName}Code from '!raw-loader!@/usages/${category}/${goal}/${fileName}'`
    importComponentCode += '\n'
    usagesImports += importComponentCode

    // usageComponents
    usageComponents += fileName + ',' + '\n'

    // usageCodes
    usageCodes += `${fileName}Code, \n`
  })

  // console.log(usagesImports)
  // console.log(usageComponents)
  // console.log(usageCodes)
}

let fileName = `${path}/index.vue`
if (!fs.existsSync(fileName)) {
  fs.appendFileSync(fileName, templateContent)

  let s1 = scriptContent
    .toString()
    .replace('<!--usagesImports-->', usagesImports)
  let s2 = s1.replace('<!--usageComponents-->', usageComponents)
  let s3 = s2.replace('<!--usageCodes-->', usageCodes)
  // console.log(s3)
  fs.appendFileSync(fileName, s3)
  fs.appendFileSync(fileName, styleContent)
}
