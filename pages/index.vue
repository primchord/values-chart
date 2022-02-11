<template>
  <div class="mx-10 md:flex divide-x divide-gray-200">
    <div class="mx-10">
      <div class="justify-center">
        お名前：
        <input
          v-model="userName"
          class="border-b-2 bg-transparent mt-1 mb-6"
          type="text"
        />
      </div>
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
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1"
                for="grid-first-name"
              >
                レベル
              </label>
            </th>
            <th>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1"
                for="grid-first-name"
              >
                削除
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(point, index) in points" :key="point.index">
            <td>
              <input
                v-model="point.name"
                type="text"
                required
                maxlength="8"
                class="w-40 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </td>
            <td>
              <select
                v-model.number="point.value"
                class="w-20 ml-1 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                class="bg-transparent focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 ml-1 rounded"
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
    <div class="mx-auto">
      <highchart :options="chartOptions" :modules="['exporting']" more />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          name: '',
          value: Number,
        },
      ],
      userName: '',
    }
  },
  computed: {
    chartOptions() {
      return {
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}',
        },
        plotOptions: {
          packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            zMin: 1,
            zMax: 10,
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02,
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'bold',
              },
            },
            minPointSize: 5,
          },
        },
        chart: {
          type: 'packedbubble',
          height: '80%',
        },
        title: {
          text: `${this.userName}の価値観`,
        },
        series: [
          {
            data: this.points,
          },
        ],
      }
    },
  },
  methods: {
    add() {
      this.points.push({ name: '', value: Number })
    },
    del(index) {
      this.points.splice(index, 1)
    },
    onChange(level) {
      this.points.value = Number(level.target.value)
    },
  },
}
</script>
