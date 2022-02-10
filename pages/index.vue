<template>
  <div class="mx-10 md:flex divide-x divide-gray-200">
    <div class="p6">
      <table class="table-fixed">
        <thead>
          <tr>
            <th>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                価値観
              </label>
            </th>
            <th>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                レベル
              </label>
            </th>
            <th>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                削除
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>
              <input
                v-model="user.value"
                type="text"
                required
                maxlength="8"
                class="w-40 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </td>
            <td>
              <select
                v-model="user.level"
                class="w-20 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                @change="onChange"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <!-- <input type="number" maxlength="10" required v-model="user.level" /> -->
            </td>
            <td>
              <button
                class="bg-transparent focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                type="button"
                @click="del(index)"
              >
                ✖
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline text-xs font-bold leading-tight focus:outline-none text-white font-bold mt-2 py-2 px-3 rounded"
        @click="add"
      >
        行を追加
      </button>
    </div>
    <div><map-view /></div>
  </div>
</template>

<script>
import MapView from '../components/MapView.vue'
export default {
  components: { MapView },
  data() {
    return {
      users: [
        {
          value: '',
          level: '',
        },
      ],
    }
  },
  methods: {
    add() {
      this.users.push({ value: '', level: '' })
    },
    del(index) {
      this.users.splice(index, 1)
    },
    onChange(value) {
      this.users.level = value.target.value
    },
  },
}
</script>
<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
