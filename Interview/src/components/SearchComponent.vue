<template>
  <div class="relative">
    <input
      type="text"
      class="w-[110px] pl-9 border border-gray-300 font-semibold leading[20px] placeholder-blue-700 rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-500"
      placeholder="Search"
      v-model="searchTerm"
    />
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-[15.45px] h-[15.45px] text-[#0055FF]"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div v-if="filteredData.length > 0" class="mt-5">
      <div class="grid grid-cols-2 gap-4 mt-10">
        <div v-for="item in filteredData" :key="item" class="p-4 border bg-white rounded-xl">
          <h2 class="text-xs text-gray-500 font-semibold">{{ item.customer }}</h2>
          <p class="font-bold text-lg">{{ item.project }}</p>
          <span class="text-sm text-gray-400">{{ item.date }}</span>
        </div>
      </div>
    </div>
    <!-- <div v-else class="text-center">There is no Projects</div> -->
  </div>
</template>

<script lang="ts">
import data from '@/assets/projects.json'

export default {
  name: 'SearchBar',
  data() {
    return {
      searchTerm: '',
      filteredData: []
    }
  },
  watch: {
    searchTerm() {
      this.filterData()
    }
  },
  methods: {
    filterData() {
      this.filteredData = data.filter((item) =>
        item.customer.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  }
}
</script>
