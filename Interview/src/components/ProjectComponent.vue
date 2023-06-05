<template>
  <div class="grid grid-cols-2 gap-4 mt-4">
    <div v-for="item in myData" :key="item.id" class="p-4 border bg-white h-[193px] rounded-xl">
      <h2 class="text-xs text-gray-500 font-semibold">{{ item.customer }}</h2>
      <p class="font-bold text-lg mb-20">{{ item.project }}</p>
      <span class="text-sm text-gray-400">{{ item.date }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import projects from '../assets/projects.json'

export default {
  data() {
    return {
      myData: projects
    }
  }
}
</script>
