<template>
  <div class="periodic-table">
    <the-element v-for="element in periodicTableData" :key="`${element.name}-${element.atomicWeight}`" :name="element.name" :row="element.row" :column="element.column" :atomicNumber="element.atomicNumber" :symbol="element.symbol" :block="element.block" :class="getClass(element.block)" @click="setBackgroundBlock(element.block)" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import TheElement from '../PeriodicTable/Element/TheElement.vue';

export default defineComponent({
  components: {
    TheElement,
  },
  data() {
    return {
      selectedBlock: ''
    }
  },
  props: ['periodicTableData'],
  methods: {
    setBackgroundBlock(block) {
      this.selectedBlock = block;
    },
    getClass(block) {
      return this.selectedBlock === block ? `element bg-${this.selectedBlock}` : 'element';
    }
  }
});
</script>

<style scoped>
.periodic-table {
  display: grid;
  grid-template-columns: repeat(18, 72px);
  grid-template-rows: repeat(10, 72px);
  grid-gap: 4px;
}
</style>