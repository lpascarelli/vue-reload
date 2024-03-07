<template>
  <div :class="addBackground" @click="setBackgroundBlock(block)">
    <small class='number'>{{ atomicNumber }}</small>
    <strong class='symbol'>{{ symbol }}</strong>
    <small class='name'>{{ name }}</small>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    selectedBlock: ''
  },
  props: {
    name: {
      type: String,
    },
    row: {
      type: String,
    },
    column: {
      type: String,
    },
    atomicNumber: {
      type: String,
    },
    symbol: {
      type: String,
    },
    block: {
      type: String,
    },
  },
  methods: {
    setBackgroundBlock(block) {
      this.selectedBlock = block;
    }
  },
  computed: {
    addBackground() {
      return this.selectedBlock === block ? `element bg-${this.selectedBlock}` : 'element'; 
    }
  }
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