<script setup>
import ToggleTheme from './components/ToggleTheme.vue'

</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="space"></div>
      <div class="bar">
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  border-bottom: 1px solid lightgray;
}
.nav {
  width: 100%;
  display: flex;
  padding: 30px;
  box-sizing: border-box;
}
.space,
.bar {
  flex: 1 0 0;
}
</style>
