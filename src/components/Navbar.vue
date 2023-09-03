<template>
    <div class="w-100 navbarHeight">
            <nav class="navbar bg-body-tertiary w-100 px-4">
                <div class="">
                    <a class="navbar-brand text-dark fs-3 fw-bold" href="#">Mbegera Health Care</a>
                </div>
                <div>
                    <button type="button" class="btn btn-outline-secondary" @click="signOut">Sign Out</button>
                </div>
            </nav>
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

.navbarHeight {
    min-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>