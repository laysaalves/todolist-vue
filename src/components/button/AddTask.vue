<script setup lang="ts">

import Button from 'primevue/button';

defineProps<{
  title: string;
}>()
</script>

<template>
    <Button severity="success" class="uppercase font-bold">{{ title }}</Button>
</template>