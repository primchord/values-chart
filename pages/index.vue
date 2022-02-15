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
            <!-- <th>
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
            </th> -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(level, i) in levels" :key="i">
              <input
                v-model="level.name"
                type="text"
                maxlength="100"
                class="w-40 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </td>
            <!-- <td>
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
              <input type="number" maxlength="10" required v-model="user.level" />
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
            -->
          </tr>
        </tbody>
      </table>
      <button
        class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline text-xs font-bold leading-tight focus:outline-none text-white font-bold mt-2 py-2 px-3 rounded"
        @click="view"
      >
        描画
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
      point1: [],
      point2: [],
      point3: [],
      point4: [],
      point5: [],
      levels: [
        {
          name: '',
        },
        {
          name: '',
        },
        {
          name: '',
        },
        {
          name: '',
        },
        {
          name: '',
        },
      ],
      userName: '',
      setOptions: {
        colors: [
          '#058DC7',
          '#50B432',
          '#ED561B',
          '#DDDF00',
          '#24CBE5',
          '#64E572',
          '#FF9655',
          '#FFF263',
          '#6AF9C4',
        ],
      },
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
            name: 'level1',
            data: this.point1,
            // data: [{ name: 'okane', value: 1 }, { name: 'nakama' }],
          },
          {
            name: 'level2',
            data: this.point2,
          },
          {
            name: 'level3',
            data: this.point3,
          },
          {
            name: 'level4',
            data: this.point4,
          },
          {
            name: 'level5',
            data: this.point5,
          },
        ],
      }
    },
  },
  methods: {
    // add() {
    //   this.points.push({ name: '', value: Number })
    // },
    // del(index) {
    //   this.points.splice(index, 1)
    // },
    // onChange(level) {
    //   this.points.value = Number(level.target.value)
    // },
    listSplit(i) {
      return this.levels[i].name.split(' ')
    },
    async makeArray(nameArray, index) {
      nameArray = []
      const data = await this.listSplit(index)
      data.forEach((elm, i) => nameArray.push(data.slice(i, i + 1)))
      nameArray.forEach((res) => res.push(index + 1))
      return nameArray
    },
    view() {
      this.makeArray(this.point1, 0).then((value) => (this.point1 = value))
      this.makeArray(this.point2, 1).then((value) => (this.point2 = value))
      this.makeArray(this.point3, 2).then((value) => (this.point3 = value))
      this.makeArray(this.point4, 3).then((value) => (this.point4 = value))
      this.makeArray(this.point5, 4).then((value) => (this.point5 = value))
    },
  },
}
</script>
