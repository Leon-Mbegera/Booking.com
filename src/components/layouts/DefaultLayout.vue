<script setup>
import Navbar from '../Navbar.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <Navbar />
  <div class="w-100 everyThingElse">
    <Sidebar />
        <slot>
        </slot>
  </div>
</template>

<style scoped>
  .everyThingElse {
    height: calc(100% - 80px);
    display: grid;
    grid-template-columns: 2fr 10fr;
 }

</style>
