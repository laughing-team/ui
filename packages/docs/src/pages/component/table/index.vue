<script setup lang="ts">
import { XTable, XTableBody, XTableCell, XTableHead, XTableHeader, XTableRow } from '@indielayer/ui'
import UsageDemoCode from './usage.vue?raw'
import UsageDemo from './usage.vue'

const title = 'Table'
const description = 'Table.'
const components = [XTable, XTableBody, XTableCell, XTableHead, XTableHeader, XTableRow]
const demos = [{
  name: 'Usage',
  description: '',
  code: UsageDemoCode,
  component: UsageDemo,
}]
const back = 'spinner'
const next = 'tabs'
</script>

<template>
  <document-page
    github="https://github.com/indielayer/ui/blob/main/packages/docs/src/pages/component/table"
    :title="title"
    :description="description"
    :components="components"
    :demos="demos"
    :back="back"
    :next="next"
  />
</template>
