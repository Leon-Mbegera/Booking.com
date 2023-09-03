<template>
    <DefaultLayoutVue>
        <div class="d-flex justify-content-between">
            <div v-for="service in services" :key="service.type">
                <AppointmentCard :service="service" @submit="onModalOpen"/>
            </div>
            <Teleport to="body">
            <!-- use the modal component, pass in the prop -->
            <modal :show="showModal" @submit="onSubmit">
                <Form :currentService="currentService" @close="onModalClose"></Form>
            </modal>
          </Teleport>
        </div>
    </DefaultLayoutVue>
</template>

<script setup>
import AppointmentCard from '../components/AppointmentCard.vue';
import DefaultLayoutVue from '../components/layouts/DefaultLayout.vue';
import Modal from '../components/Modal.vue';
import Form from '../components/Form.vue';
import consultationImg from '../assets/consultations.jpg'
import checkUpImg from '../assets/checkups.jpg'


import { ref } from 'vue';

const onSubmit = () => {
   return;
};

const showModal = ref(false);
const currentService = ref(null);

const onModalOpen = (service) => {
 currentService.value = service
 showModal.value = true;
}

const onModalClose = () => {
 currentService.value = null;
 showModal.value = false;
}

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