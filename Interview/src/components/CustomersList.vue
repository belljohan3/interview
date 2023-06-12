<template>
  <h1 class="text-2xl leading-[40px] font-bold mt-8 mb-5">Customers List</h1>
  <ul v-for="item in myData" :key="item.lastDate" class="px-3 border bg-white rounded-xl">
    <li class="text-lg">{{ item.customer }}</li>
  </ul>
</template>

<script lang="ts" setup>
import projects from '../assets/projects.json'

const myData = projects
</script>
