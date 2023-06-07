<template>
  <div>
    <div class="flex justify-center">
      <button
        id="button"
        data-modal-toggle="modal"
        data-modal-target="modal"
        type="button"
        class="text-white w-[343px] rounded-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-2.5 mr-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        + New Project
      </button>
    </div>

    <div
      id="modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-[300px] max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between py-2 px-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">New Project</h3>
            <button
              id="closeButton"
              data-modal-hide="modal"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6">
            <form @submit.prevent="saveData">
              <div class="mb-6">
                <label
                  for="customer"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Customer</label
                >
                <input
                  v-model="customer"
                  type="text"
                  id="customer"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="project"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Project Name</label
                >
                <input
                  v-model="project"
                  type="text"
                  id="project"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="date"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Date</label
                >
                <input
                  v-model="date"
                  type="datetime-local"
                  id="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                id="closeButton"
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                + Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import axios from 'axios'
import projects from '../assets/projects.json'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

export default {
  data() {
    return {
      id: 0,
      customer: '',
      project: '',
      date: '',
      datas: projects
    }
  },
  methods: {
    // save datas from the form
    saveData() {
      const dataToSave = {
        id: this.id++,
        customer: this.customer,
        project: this.project,
        date: this.date
      }

      // push datas form the Array
      this.datas.push(dataToSave)

      // request that write new datas in the JSON file
      axios
        .post('http://localhost:3000/api/save-data', dataToSave)
        .then((response) => {
          console.log('Data and saved successfully', response)
        })
        .catch((error) => {
          console.error('Error saving data:', error)
        })
      // resseting forms
      this.customer = ''
      this.project = ''
      this.date = ''

      // reload the page
      window.location.reload()
    }
  }
}
</script>
