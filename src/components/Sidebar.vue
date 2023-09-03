<template>
    <div class="col col-2 border border-primary sidebar pt-5">
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
        <li class="nav-item text-light">
          <a class="nav-link text-light fs-5 fw-semibold" @click="signOut">
            Sign Out
          </a>
        </li>
      </ul>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const signOut = () => {
    localStorage.removeItem('SignedInToken'),
    router.push('/signup')
}
</script>

<style scoped>
.sidebar {
  background-color: #131313;
 }
</style>