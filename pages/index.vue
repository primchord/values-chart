<template>
  <div class="lg:flex md:mt-5 md:mx-1 md:divide-x md:divide-gray-200">
    <div class="lg:flex lg:w-1/3">
      <div class="mx-10 mt-7">
        <div>
          お名前：
          <input
            v-model="userName"
            class="border-b-2 bg-transparent mt-1 mb-6"
            type="text"
          />
        </div>
        <table class="table-fixed w-full md:w-100">
          <thead class="w-full md:w-80">
            <tr>
              <th>
                <label
                  class="sm:w-full block uppercase tracking-wide text-gray-700 text-xs font-bold ml-1"
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
                  :class="level.color"
                  class="sm:w-full block appearance-none border border-gray-200 text-gray-700 py-2 px-4 mb-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
    </div>
    <div class="mx-10 lg:w-2/3 mt-7 lg:mt-0">
      <highchart
        :options="chartOptions"
        :set-options="setOptions"
        :modules="['exporting']"
        more
      />
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
          color: 'bg-blue-200',
        },
        {
          name: '',
          value: 'Lv2',
          color: 'bg-green-200',
        },
        {
          name: '',
          value: 'Lv3',
          color: 'bg-orange-200',
        },
        {
          name: '',
          value: 'Lv4',
          color: 'bg-yellow-100',
        },
        {
          name: '',
          value: 'Lv5',
          color: 'bg-pink-100',
        },
      ],
      userName: '',
      setOptions: {
        colors: [
          '#93C5FD',
          '#4ADE80',
          '#FB923C',
          '#DDDF00',
          '#F9A8D4',
          // '#64E572',
          // '#FF9655',
          // '#FFF263',
          // '#6AF9C4',
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
          height: '70%',
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
    changeSpace(i) {
      return this.levels[i].name.replace(/\u3000/g, ' ') // 全角スペース変換
    },
    listSplit(i) {
      return this.changeSpace(i).split(' ')
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
      } else {
        this.point1 = []
      }
      if (this.levels[1].name !== '') {
        this.makeArray(this.point2, 1).then((value) => (this.point2 = value))
      } else {
        this.point2 = []
      }
      if (this.levels[2].name !== '') {
        this.makeArray(this.point3, 2).then((value) => (this.point3 = value))
      } else {
        this.point3 = []
      }
      if (this.levels[3].name !== '') {
        this.makeArray(this.point4, 3).then((value) => (this.point4 = value))
      } else {
        this.point4 = []
      }
      if (this.levels[4].name !== '') {
        this.makeArray(this.point5, 4).then((value) => (this.point5 = value))
      } else {
        this.point5 = []
      }
    },
  },
}
</script>
