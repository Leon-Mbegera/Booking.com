<template>
<p>Book: {{ props.currentService?.type }}</p>
</template>
<script setup>
const props = defineProps(["currentService"])

</script>