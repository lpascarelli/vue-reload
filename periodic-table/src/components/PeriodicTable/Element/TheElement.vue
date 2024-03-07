<template>
  <div :style="{ gridRow: row, gridColumn: column }">
    <small class='number'>{{ atomicNumber }}</small>
    <strong class='symbol'>{{ symbol }}</strong>
    <small class='name'>{{ name }}</small>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    row: {
      type: Number,
    },
    column: {
      type: Number,
    },
    atomicNumber: {
      type: Number,
    },
    symbol: {
      type: String,
    },
    block: {
      type: String,
    },
  },
})
</script>

<style scoped>
.element {
  border: 1px solid #aaa;
  row-gap: 8px;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.element:hover {
  cursor: pointer;
}

.symbol {
  text-align: center;
}

.number {
  font-size: 8px;
}

.name {
  font-size: 8px;
  text-align: center;
}

.bg-s {
  background-color: lightcoral;
}
.bg-p {
  background-color: lightyellow;
}
.bg-d {
  background-color: lightskyblue;
}
.bg-f {
  background-color: lightgreen;
}
</style>