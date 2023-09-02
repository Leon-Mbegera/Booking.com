<template>
    <div class="d-flex row justify-content-between p-2">
        <div v-for="appointment in appointments" class="card col-5 px-2 mb-3">
            <div class="card-body">
                <h5 class="card-title">
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
</template>

<script setup>
 import { ref, watchEffect } from 'vue'
 import { useDateFormat } from '@vueuse/core'

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