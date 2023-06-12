<template>
  <div class="relative">
    <input
      type="text"
      class="w-[110px] pl-9 border border-gray-300 font-semibold leading[20px] placeholder-blue-700 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-500"
      placeholder="Search"
      v-model="searchQuery"
    />
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 text-[#0055FF]"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div v-if="searchResults.length > 0" class="relative top-full mt-5">
      <h1 class="text-2xl leading-[40px] font-bold mb-5">Results</h1>

      <div class="grid grid-cols-2 gap-4 overflow-y-auto mt-4">
        <div v-for="item in searchResults" :key="item" class="p-4 border bg-white rounded-xl">
          <h2 class="text-xs text-gray-500 font-semibold">{{ item.customer }}</h2>
          <p class="font-bold text-lg mb-[5.5rem]">{{ item.project }}</p>
          <span class="text-sm text-gray-400">{{ date(item.lastDate).fromNow() }}</span>
        </div>
      </div>
      <div class="border border-black mt-5 mx-auto w-[15rem]"></div>
    </div>
  </div>
</template>

<script lang="ts">
import jsonData from '@/assets/projects.json' // Chemin vers votre fichier JSON
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'

export default {
  data() {
    return {
      searchQuery: '',
      jsonData: [],
      date: dayjs.extend(relativeTime)
    }
  },
  mounted() {
    // Charger les données depuis le fichier JSON
    this.jsonData = jsonData
  },
  computed: {
    searchResults() {
      if (this.searchQuery === '') {
        return []
      }

      const query = this.searchQuery.toLowerCase()

      return this.jsonData.filter(
        (item) =>
          item.customer.toLowerCase().includes(query) || item.project.toLowerCase().includes(query)
      )
    }
  }
}
</script>
