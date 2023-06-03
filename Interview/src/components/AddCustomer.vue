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
            <form @submit="submitForm">
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
            </form>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center py-2 px-5 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
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

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

export default {
  data() {
    return {
      customer: '',
      project: '',
      date: ''
    }
  },
  methods: {
    submitForm(event: { preventDefault: () => void }) {
      event.preventDefault()

      // Create an object with form datas
      const formData = {
        customer: this.customer,
        project: this.project,
        date: this.date
      }

      // Add the form data to the local JSON file
      this.addToJSON(formData)

      // Effectuer une validation ou un traitement supplémentaire des données ici

      // Clear the form inputs after submission
      this.customer = ''
      this.project = ''
      this.date = ''
    },
    // Make an Axios POST request to add the data to the JSON file
    addToJSON(formData: { customer: string; project: string; date: string }) {
      axios
        .post('https:/localhost:3000/src/assets/projects.json', formData)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
