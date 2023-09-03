<template>
    <DefaultLayoutVue>
        <div class="d-flex justify-content-between">
            <Consultations />
            <Checkup />
        </div>
    </DefaultLayoutVue>
</template>

<script setup>
import Consultations from '../components/Consultations.vue';
import Checkup from '../components/checkups.vue';
import DefaultLayoutVue from '../components/layouts/DefaultLayout.vue';
</script>