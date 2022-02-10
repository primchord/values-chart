<template>
  <div>
    <highchart
      :options="chartOptions"
      :update="['options.title', 'options.series']"
      :modules="['exporting']"
      more
    />
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: 'あなた',
    },
    users: {
      type: Array,
      default: () => [
        {
          data: [
            {
              name: '価値観',
              value: 4,
            },
          ],
        },
      ],
    },
  },
  data() {
    return {
      // userData: {
      //   name: this.users.level,
      //   data: {
      //     name: this.users.value,
      //     value: this.users.level,
      //   },
      // },
      userData: () => ({
        data: [{ name: '価値観', value: 3 }],
      }),

      chartOptions: {
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}',
        },
        plotOptions: {
          packedbubble: {
            minSize: '30%',
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
                fontWeight: 'normal',
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
        series: this.users,
        // series: [
        //   {
        //     name: 'Coffee', // Coffee series
        //     data: [
        //       {
        //         // name property is used for the datalabel
        //         // value property is used for the volume of the bubble
        //         value: 12,
        //         name: 'パン',
        //       },
        //       {
        //         value: 5,
        //         name: 'ジョン',
        //       },
        //       {
        //         value: 10,
        //         name: 'サラダ',
        //       },
        //       {
        //         value: 7,
        //         name: 'Cecile',
        //       },
        //     ],
        //   },
        //   {
        //     name: 'Energy drinks', // Energy drinks series
        //     data: [
        //       {
        //         value: 10,
        //         name: 'Tristan',
        //       },
        //     ],
        //   },
        //   {
        //     name: 'Tea', // Tea series
        //     data: [
        //       5,
        //       6,
        //       8,
        //       {
        //         value: 10,
        //         name: 'Mustapha',
        //         color: 'pink',
        //       },
        //     ],
        //   },
        // ],
      },
    }
  },
  computed: {
    // updateTitle: () => (this.name = this.name),
  },
}
</script>

<style scoped>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
