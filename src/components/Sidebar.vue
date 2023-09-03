<template>
    <div class="sidebar pt-5">
      <ul class="nav d-flex flex-column">  
        <li class="nav-item text-light">
          <router-link to="/" class="nav-link text-light fs-5 fw-semibold">
            Booking.com
          </router-link>
        </li>
        <li class="nav-item text-light">
          <router-link to="/myappointments" class="nav-link text-light fs-5 fw-semibold">
            Appointments
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
  background-color: #131313;
 }
</style>