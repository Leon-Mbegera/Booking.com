<script setup>
import Navbar from '../Navbar.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <Navbar />
  <div class="row border border-warning w-100">
    <Sidebar />
    <div class="col col-10 border border-secondary">
        <slot>
        </slot>
    </div>
  </div>
</template>

<style scoped>
 .sidebar {
  background-color: #131313;
 }

</style>
