<template>
    <DefaultLayout>
        <div class="scrollMain px-4">
            <div v-for="appointment in appointments" class="card col-5 px-2 w-100">
                <div class="card-body">
                    <h5 class="card-title mb-3">
                        Type of Appointment:
                        {{ appointment.type }}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-dark">
                        Date of Appointment:
                        {{ (useDateFormat(appointment.date, "dddd MMMM D YYYY")) }}
                    </h6>
                    <p class="card-text">
                        Time of Appointment:
                        {{ appointment.startTime }}
                    </p>
                    <button type="button" class="btn btn-danger" @click="CancelAppointment(appointment.id)">Cancel Appointment</button>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
 import { ref, watchEffect } from 'vue'
 import { useDateFormat } from '@vueuse/core'
 import DefaultLayout from '../components/layouts/DefaultLayout.vue';

const appointments = ref(null);

const getData = async () => {
    const res = await fetch("https://64f1fd910e1e60602d248792.mockapi.io/mbegera/healthcare/appointments");
    const finalRes = await res.json();
    console.log(finalRes);
    appointments.value = finalRes;
}

const CancelAppointment = async (id) => {
    fetch(`https://64f1fd910e1e60602d248792.mockapi.io/mbegera/healthcare/appointments/${id}`, {
    method: 'DELETE',
        }).then(res => {
        if (res.ok) {
            alert('Appontment Canceled!')
            getData();            
        }
        }).catch(error => {
        // handle error
        })
}

watchEffect(() => getData());

</script>

<style scoped>
.scrollMain {
    overflow-y: auto;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}
</style>