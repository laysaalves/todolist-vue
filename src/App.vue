<script setup>
import TaskInput from './components/input/TaskInput.vue';
import AddTask from './components/button/AddTask.vue';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import 'primeicons/primeicons.css'

import { reactive } from 'vue';

  const status = reactive({
    newTask: '',
    tasks: [
      {
        id: 1,
        title: 'Task unfinished example',
        checked: false,
      },
      {
        id: 2,
        title: 'Task checked example',
        checked: true,
      },
    ],
    unfinishedTaskCount: 0
  })

  const taskRegister = () => {
    status.tasks.push({
      title: status.newTask,
      checked: false,
      id: status.tasks.length + 1,
    })
    status.newTask = ''
    status.unfinishedTaskCount = status.tasks.filter(task => !task.checked).length
  }

  const taskRemove = (taskId) => {
    const taskToRemove = status.tasks.find((task) => task.id === taskId);
      if (taskToRemove) {
        status.tasks = status.tasks.filter((task) => task.id !== taskId);
        status.unfinishedTaskCount = status.tasks.filter(task => !task.checked).length
      }
  };

  const taskFilter = () => {
    status.unfinishedTaskCount = status.tasks.filter(task => !task.checked).length
    return status.tasks
  }
</script>

<template>
  <main class="min-h-screen flex items-center justify-center flex-col p-20">
    <img src="./assets/images/todolist-icon.png" alt="TO DO LIST Icon" class="size-40">
      <h1 class="text-lg mb-6 font-bold">TO DO APP with VueJS</h1>
    <form @submit.prevent="taskRegister">
      <div class="flex justify-center gap-4">
          <TaskInput required type="text" v-model="status.newTask"/>
          <AddTask type="submit" title="create"/>
      </div>
    </form>
    <div class="mt-4">
      <Button type="button" label="Unfinished tasks" :badge="status.unfinishedTaskCount" contrast outlined />
    </div>
    <div class="flex flex-col pt-4">
      <div v-for="task in taskFilter()" class="flex items-center mt-2">
        <Checkbox v-model="task.checked" binary :id="task.id" :checked="task.checked"/>
          <label :class="{done:task.checked}" class="ms-2">
            {{task.title}}
          </label>
            <Button @click="taskRemove(task.id)" icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" class="ms-4"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .done{
    text-decoration: line-through;
  }
</style>