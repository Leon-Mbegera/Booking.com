<template>
    <DefaultLayoutVue>
        <div class="cardGrid px-4">
            <div v-for="service in services" :key="service.type">
                <AppointmentCard :service="service" @submit="onModalOpen" />
            </div>
            <Teleport to="body">
            <!-- use the modal component, pass in the prop -->
            <modal :show="showModal" @close="onModalClose">
                <Form :currentService="currentService" @close="onModalClose" @submit="onSubmit"></Form>
            </modal>
          </Teleport>
        </div>
    </DefaultLayoutVue>
</template>it

<script setup>
import AppointmentCard from '../components/AppointmentCard.vue';
import DefaultLayoutVue from '../components/layouts/DefaultLayout.vue';
import Modal from '../components/Modal.vue';
import Form from '../components/Form.vue';
import consultationImg from '../assets/consultations.jpg'
import checkUpImg from '../assets/checkups.jpg'


import { ref } from 'vue';


const showModal = ref(false);
const currentService = ref(null);

const onModalOpen = (service) => {
 currentService.value = service
 showModal.value = true;
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


const onModalClose = () => {
 currentService.value = null;
 showModal.value = false;
}

const onSubmit = ({ typeInput, dateInput, startTime }) => {
    fetch("https://64f1fd910e1e60602d248792.mockapi.io/mbegera/healthcare/appointments", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        type: typeInput,
        date: dateInput,
        startTime: startTime,
        overdue: false
    })
})
    .then(() => {
        alert("ok");
        onModalClose();
    })
}
</script>

<style scoped>
    .cardGrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1rem;
    }
</style>