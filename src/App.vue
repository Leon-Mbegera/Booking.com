<script setup>
import SignUp from './views/SignUp.vue';
</script>

<template>
  <div class="row border border-danger w-100">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand text-dark fs-3 fw-bold" href="#">Mbegera Health Care</a>
      </div>
    </nav>
  </div>
  <div class="row border border-warning w-100">
    <div class="col col-2 border border-primary sidebar pt-5" style="min-height: 520px;">
      <ul class="nav d-flex flex-column">  
        <li class="nav-item text-light">
          <router-link to="/" class="nav-link text-light fs-5 fw-semibold">
            Booking.com
          </router-link>
        </li>
        <li class="nav-item text-light">
          <router-link to="/myappointments" class="nav-link text-light fs-5 fw-semibold">
            Appointments
          </router-link>        </li>
      </ul>
    </div>
    <div class="col col-10 border border-secondary">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
 .sidebar {
  background-color: #131313;
 }

</style>
