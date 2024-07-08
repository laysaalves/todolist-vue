<script setup>
import AddTask from './components/button/AddTask.vue';
import TaskInput from './components/input/TaskInput.vue';
</script>

<template>
  <main class="bg-green-500 min-h-screen flex items-center justify-center flex-col p-20">
      <h1 class="text-2xl mb-8 font-bold">TO DO LIST APP with VueJS</h1>
      <TaskInput/>
      <div class="pt-4">
          <AddTask title="create"/>
      </div>
  </main>
</template>