<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
// import { defineProps } from 'vue'
import ProjectComponent from './ProjectComponent.vue'
import SearchComponent from './SearchComponent.vue'
import AddCustomer from './AddCustomer.vue'
import CustomersList from './CustomersList.vue'

// const activeTab = 'projects'
// const components = {
//   ProjectComponent,
//   SearchComponent,
//   AddCustomer,
//   CustomersList
// }
</script>

<template>
  <div
    class="container relative mx-auto w-[375px] h-[812px] bg-[#EDF0F3] rounded-xl shadow-xl p-3 m-10"
  >
    <AddCustomer class="absolute inset-x-0 bottom-16 ml-2 z-50" />
    <div class="content pb-[56px]">
      <!-- content of each Menu which is active -->
      <div v-if="activeTab === 'projects'">
        <h1 class="text-[32px] leading-[40px] font-bold mt-8 mb-8">Projects</h1>
        <SearchComponent />
        <ProjectComponent />
      </div>
      <div v-if="activeTab === 'customers'"><CustomersList /></div>
      <div v-if="activeTab === 'company'"><SearchComponent /></div>
    </div>

    <div>
      <nav
        class="absolute inset-x-0 bottom-0 bg-white rounded-b-xl flex text-gray-400 justify-around items-center p-2"
      >
        <a
          :class="{ 'text-blue-500': activeTab === 'projects' }"
          @click="activeTab = 'projects'"
          class="text-[10px]"
        >
          <svg
            class="h-[20.54px] w-[20.54px] mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 4a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 11-2 0V5H5a1 1 0 01-1-1zm-2 9V5a3 3 0 013-3h10a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3zM3 14h14a1 1 0 100-2H3a1 1 0 100 2z"
              clip-rule="evenodd"
            />
          </svg>
          Projects
        </a>
        <a
          :class="{ 'text-blue-500': activeTab === 'customers' }"
          @click="activeTab = 'customers'"
          class="text-[10px]"
        >
          <svg
            class="h-[20.54px] w-[20.54px] mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M18.5 17.5a1 1 0 01-1.33.94l-3.8-1.33A8 8 0 1117 10h1.5a1 1 0 010 2H17a6 6 0 10-5.33 8.81l1.33 3.8a1 1 0 01.94 1.33zM14 10h1.5a1 1 0 110 2H14a4 4 0 110-8h1.5a1 1 0 110 2H14a2 2 0 100 4z"
              clip-rule="evenodd"
            />
          </svg>
          Customers
        </a>
        <a
          :class="{ 'text-blue-500': activeTab === 'company' }"
          class="text-[10px]"
          @click="activeTab = 'company'"
        >
          <svg
            class="h-[20.54px] w-[20.54px] mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            <path
              fill-rule="evenodd"
              d="M10 4a4 4 0 100 8 4 4 0 000-8zm-8 4a8 8 0 1116 0A8 8 0 012 8zm14 4a6 6 0 10-12 0h12z"
              clip-rule="evenodd"
            />
          </svg>
          Company
        </a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeTab: 'projects'
    }
  }
}
</script>
