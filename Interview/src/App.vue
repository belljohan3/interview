<script lang="ts" setup>
import ProjectComponent from './components/ProjectComponent.vue'
import SearchComponent from './components/SearchComponent.vue'
import AddCustomer from './components/AddCustomer.vue'
</script>

<template>
  <AddCustomer />
  <div
    class="container relative mx-auto w-[375px] h-[812px] bg-[#EDF0F3] rounded-xl shadow p-3 m-10"
  >
    <div class="content pb-[56px]">
      <!-- content of each Menu which is active -->
      <div v-if="activeTab === 'projects'">
        <h1 class="text-2xl leading-[40px] font-bold mt-8 mb-8">Projects</h1>
        <SearchComponent />
        <ProjectComponent />
      </div>
      <div v-if="activeTab === 'customers'"><CustomersList /></div>
      <div v-if="activeTab === 'company'">Contenu de la page Profil</div>
    </div>
    <nav
      class="absolute inset-x-0 bottom-0 bg-white flex text-gray-400 justify-around items-center p-4"
    >
      <a :class="{ 'text-blue-500': activeTab === 'projects' }" @click="activeTab = 'projects'">
        <svg
          class="h-[20.54px] w-[20.54px] mb-1"
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
      <a :class="{ 'text-blue-500': activeTab === 'customers' }" @click="activeTab = 'customers'">
        <svg
          class="h-[20.54px] w-[20.54px] mb-1"
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
      <a :class="{ 'text-blue-500': activeTab === 'company' }" @click="activeTab = 'company'">
        <svg
          class="h-[20.54px] w-[20.54px] mb-1"
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
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeTab: 'projects' // Default active Tab
    }
  }
}
</script>
