<template>
    <div class="card">
        <div class="card-header">
            <p class="text-dark fs-4 fw-bold">{{ props.service.type }}</p>
            <p class="badge rounded-pill text-bg-danger">Book now!</p>
        </div>
        <div class="card-body">
            <img :src="props.service.image" class="card-img-top imageSize" alt="consultations.jpg">
        </div>
        <div class="card-footer">
            <button type="button" @click="emit('submit', props.service)" class="btn btn-danger w-100 fw-semibold">{{ props.service.buttonTitle }}</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["service"]);
const emit = defineEmits(['submit']);

</script>

<style scoped>

.imageSize {
    height: 200px;
    width: 200px;
}

</style>