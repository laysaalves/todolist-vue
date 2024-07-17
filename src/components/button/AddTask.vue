<script setup lang="ts">

import Button from 'primevue/button';

defineProps<{
  title: string;
}>()
</script>

<template>
    <Button class="bg-green-500 uppercase font-bold">{{ title }}</Button>
</template>