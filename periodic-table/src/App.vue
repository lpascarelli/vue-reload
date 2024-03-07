<template>
  <div class='app'>
    <button @click="invertBidirectionally">Click me</button>
    <periodic-table :periodicTableData="periodicTableData" />
  </div>
</template>

<script>
import data from './periodic-table-data.json';

import PeriodicTable from './components/PeriodicTable/PeriodicTable.vue';
import { getInvertedPeriodicTable } from './utils';

export default {
  components: {
    PeriodicTable,
  },
  data() {
    return {
      periodicTableData: data,
      isInverted: false,
    }
  },
  methods: {
    invertBidirectionally() {
      this.isInverted = !this.isInverted;
      if (this.isInverted) {
        this.periodicTableData = getInvertedPeriodicTable(data);
      } else {
        this.periodicTableData = data;
      }
    }
  },
}
</script>

<style scoped>
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
}

button {
  background-color: white;
  color: black;
  border-radius: 16px;
  border: 2px solid;
  width: 80px;
  height: 32px;
  cursor: pointer;
}
</style>