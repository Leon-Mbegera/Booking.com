<template>
<p class="fs-4 fw-bold">Book: {{ props.currentService?.type }}</p>
<form @submit.prevent="$emit('submit', { typeInput, dateInput, startTime})">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fw-semibold">Type of Appointment</label>
                    <!-- <input type="text" :value="props.currentService?.type" readonly class="form-control" id="exampleInputEmail1" v-bind="typeInput"> -->
                    <select v-if="booleanResult" class="form-select" aria-label="Default select example" required v-model="typeInput">
                        <option selected="Consultations">Consultation</option>
                    </select>
                    <select v-else class="form-select" aria-label="Default select example" required  v-model="typeInput">
                        <option selected="Checkup">Check Up</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label fw-semibold">Date</label>
                    <input type="date" class="form-control" id="exampleInputPassword1" v-model="dateInput" required>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label fw-semibold">Start Time</label>
                    <select v-if="booleanResult" class="form-select" aria-label="Default select example" required v-model="startTime">
                        <option selected="8:00 - 8:20">8:00 - 8:20</option>
                        <option value="8:40 - 9:00">8:40 - 9:00</option>
                        <option value="11:40 - 12:00">8:40 - 9:00</option>
                        <option value="12:30 - 12:50">12:30 - 12:50</option>
                        <option value="16:20 - 16:40">16:20 - 16:40</option>
                    </select>
                    <select v-else class="form-select" aria-label="Default select example"  v-model="startTime" required>
                        <option selected="8:40 - 8:50">8:40 - 8:50</option>
                        <option value="9:30 - 9:40">9:30 - 9:40</option>
                        <option value="12:10 - 12:20">12:10 - 12:20</option>
                        <option value="14:30 - 14:40">14:30 - 14:40</option>
                        <option value="15:50 - 16:00">15:50 - 16:00</option>
                    </select>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary" @click="$emit('submit')">Submit</button>
                    <button type="submit" class="btn btn-primary" @click="$emit('close')">Cancel</button>
                </div>
            </form>
                
</template>
<script setup>
import { computed, ref } from 'vue'
const props = defineProps(["currentService"]);

const typeInput = ref("");
const dateInput = ref(null);
const startTime = ref('');

const booleanResult = computed(() => {
    if (props.currentService?.type === "Consultations") return true;
    return false;
})

</script>