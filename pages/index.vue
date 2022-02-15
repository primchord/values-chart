<template>
  <div class="mx-10 md:flex divide-x divide-gray-200">
    <div class="mx-10 mt-7">
      <div class="justify-center">
        お名前：
        <input
          v-model="userName"
          class="appearance-none border-b-2 bg-transparent mt-1 mb-6"
          type="text"
        />
      </div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th>
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold ml-1"
                for="grid-first-name"
              >
                価値観
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(level, i) in levels" :key="i" class="flex flex-col">
              {{ level.value }}:<input
                v-model="level.name"
                type="text"
                maxlength="100"
                class="w-80 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-end">
        <button
          class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline text-xs font-bold leading-tight focus:outline-none text-white font-bold mt-2 py-2 px-3 rounded"
          @click="view"
        >
          描 画
        </button>
      </div>
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
          value: 'Lv1',
        },
        {
          name: '',
          value: 'Lv2',
        },
        {
          name: '',
          value: 'Lv3',
        },
        {
          name: '',
          value: 'Lv4',
        },
        {
          name: '',
          value: 'Lv5',
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
            name: 'Lv1',
            data: this.point1,
          },
          {
            name: 'Lv2',
            data: this.point2,
          },
          {
            name: 'Lv3',
            data: this.point3,
          },
          {
            name: 'Lv4',
            data: this.point4,
          },
          {
            name: 'Lv5',
            data: this.point5,
          },
        ],
      }
    },
  },
  methods: {
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
      if (this.levels[0].name !== '') {
        this.makeArray(this.point1, 0).then((value) => (this.point1 = value))
      }
      if (this.levels[1].name !== '') {
        this.makeArray(this.point2, 1).then((value) => (this.point2 = value))
      }
      if (this.levels[2].name !== '') {
        this.makeArray(this.point3, 2).then((value) => (this.point3 = value))
      }
      if (this.levels[3].name !== '') {
        this.makeArray(this.point4, 3).then((value) => (this.point4 = value))
      }
      if (this.levels[4].name !== '') {
        this.makeArray(this.point5, 4).then((value) => (this.point5 = value))
      }
    },
  },
}
</script>
