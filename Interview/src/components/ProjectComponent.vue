<template>
  <div class="grid grid-cols-2 gap-4 min-h-[193px] max-h-[582px] overflow-y-auto mt-4">
    <div
      v-for="item in myData"
      :key="item.project"
      class="p-4 border bg-white h-[193px] rounded-xl"
    >
      <h2 class="text-xs text-gray-500 font-semibold">{{ item.customer }}</h2>
      <p class="font-bold text-lg mb-[5.5rem]">{{ item.project }}</p>
      <span class="text-sm text-gray-400">{{ dayjs(item.lastDate).fromNow() }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import projects from '../assets/projects.json'
import type { Project } from '@/types/project.type'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

dayjs.extend(relativeTime)

const myData: Project[] = projects.reverse()
</script>
