<template>
  <h1 class="text-2xl leading-[40px] font-bold mt-8 mb-5">Customers List</h1>
  <ul v-for="item in myData" :key="item.id" class="px-3 border bg-white rounded-xl">
    <li class="text-lg">{{ item.project }}</li>
  </ul>
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
