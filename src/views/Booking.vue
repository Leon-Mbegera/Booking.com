<template>
    <DefaultLayoutVue>
        <div class="d-flex justify-content-between">
            <div v-for="service in services" :key="service.type">
                <AppointmentCard :service="service" />
            </div>
            <Teleport to="body">
            <!-- use the modal component, pass in the prop -->
            <modal :show="showModal" @close="showModal = false" @submit="onSubmit">
              <template #header>
                <h3>custom header</h3>
              </template>
            </modal>
          </Teleport>
          <button id="show-modal" @click="showModal = true">Show Modal</button>
        </div>
    </DefaultLayoutVue>



</template>

<script setup>
import AppointmentCard from '../components/AppointmentCard.vue';
import DefaultLayoutVue from '../components/layouts/DefaultLayout.vue';
import Modal from '../components/Modal.vue';
import consultationImg from '../assets/consultations.jpg'
import checkUpImg from '../assets/checkups.jpg'


import { ref } from 'vue';

const onSubmit = () => {
  alert("ok");
};

const showModal = ref(false);

const services = [
    {
        image: consultationImg,
        type: "Consultations",
        buttonTitle: "Book a Consultation",
    },
    {
        image: checkUpImg,
        type: "Check Ups",
        buttonTitle: "Book a Check Up",
    }
]
</script>