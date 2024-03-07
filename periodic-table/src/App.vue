<template>
  <div class='app'>
    <p>Hello world</p>
    <button>Click me</button>
    <!-- <PeriodicTable periodicTableData={periodicTableData} /> -->
    </div>
</template>

<script>
export default {

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