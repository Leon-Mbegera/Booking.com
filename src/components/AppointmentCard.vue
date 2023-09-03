<template>
    <div class="card mt-2 col ps-2">
        <div class="card-header">
            <p class="text-dark fs-4 fw-bold">{{ props.service.type }}</p>
            <p class="badge rounded-pill text-bg-danger">Book now!</p>
        </div>
        <div class="card-body">
            <img :src="props.service.image" class="card-img-top" alt="consultations.jpg">
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-danger w-100 fw-semibold">{{ props.service.buttonTitle }}</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["service"]);

</script>