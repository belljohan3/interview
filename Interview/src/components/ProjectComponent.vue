<template>
  <div class="grid grid-cols-2 gap-4 mt-10">
    <div v-for="item in myData" :key="item.customer" class="p-4 border bg-white rounded-xl">
      <h2 class="text-xs text-gray-500 font-semibold">{{ item.customer }}</h2>
      <p class="font-bold text-lg mb-12">{{ item.project }}</p>
      <span class="text-sm text-gray-400">{{ item.date }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import jsonData from '@/assets/projects.json'

export default {
  data() {
    return {
      myData: jsonData
    }
  }
}
</script>
