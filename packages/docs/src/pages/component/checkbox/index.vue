<script setup lang="ts">
import { XCheckbox } from '@indielayer/ui'
import UsageDemoCode from './usage.vue?raw'
import UsageDemo from './usage.vue'
import VariantsDemoCode from './variants.vue?raw'
import VariantsDemo from './variants.vue'
import SizeDemoCode from './size.vue?raw'
import SizeDemo from './size.vue'
import StatesDemoCode from './states.vue?raw'
import StatesDemo from './states.vue'

const title = 'Checkbox'
const description = 'checkbox.'
const components = [XCheckbox]
const demos = [{
  name: 'Usage',
  description: '',
  code: UsageDemoCode,
  component: UsageDemo,
}, {
  name: 'Variants',
  description: '',
  code: VariantsDemoCode,
  component: VariantsDemo,
}, {
  name: 'Size',
  description: '',
  code: SizeDemoCode,
  component: SizeDemo,
}, {
  name: 'States',
  description: '',
  code: StatesDemoCode,
  component: StatesDemo,
}]
const back = ''
const next = 'form'
</script>

<template>
  <document-page
    github="https://github.com/indielayer/ui/blob/main/packages/docs/src/pages/component/checkbox"
    :title="title"
    :description="description"
    :components="components"
    :demos="demos"
    :back="back"
    :next="next"
  />
</template>
