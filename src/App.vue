<script setup>
import TaskInput from './components/input/TaskInput.vue';
import AddTask from './components/button/AddTask.vue';

import Checkbox from 'primevue/checkbox';

import { reactive } from 'vue';

  const status = reactive({
    newTask: '',
    tasks: [
      {
        title: 'escrever um codigo',
        checked: true,
      },

      {
        title: 'apagar um codigo',
        checked: false,
      },
    ]
  })

  const taskFilter = () => {
    const {filter} = status
    if(filter === "checkeds"){
      return status.tasks.filter(task => task.checked)
    }else{
      return status.tasks
    }
  }

  const taskRegister = () => {
    status.tasks.push({
      title: status.newTask,
      checked: false
    })

    status.newTask = ''
  }

</script>

<template>
  <main class="min-h-screen flex items-center justify-center flex-col p-20">
      <h1 class="text-2xl mb-6 font-bold">TO DO APP with VueJS</h1>

    <form @submit.prevent="taskRegister">
      <div class="flex justify-center gap-4">
          <TaskInput required type="text" v-model="status.newTask"/>
          <AddTask type="submit" title="create"/>
      </div>
    </form>
    
    <ul class="list-group pt-8">
      <li class="list-group-item" v-for="task in taskFilter()">
        <Checkbox v-model="task.checked" binary :id="task.title" :checked="task.checked" class="mt-2"/>
        <label :for="task.title" :class="{done:task.checked}" class="ml-2">
          {{task.title}}
        </label>
      </li>
    </ul>

  </main>
</template>

<style scoped>
  .done{
    text-decoration: line-through;
  }
</style>