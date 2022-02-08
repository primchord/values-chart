<template>
  <div class="container">
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
  data() {
    return {
      chartOptions: {
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>',
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
        // plotOptions: {
        //   packedbubble: {
        //     minSize: '30%',
        //     maxSize: '120%',
        //     zMin: 0,
        //     zMax: 1000,
        //     layoutAlgorithm: {
        //       splitSeries: false,
        //       gravitationalConstant: 0.02,
        //     },
        //     dataLabels: {
        //       enabled: true,
        //       format: '{point.name}',
        //       filter: {
        //         property: 'y',
        //         operator: '>',
        //         value: 250,
        //       },
        //       style: {
        //         color: 'black',
        //         textOutline: 'none',
        //         fontWeight: 'normal',
        //       },
        //     },
        //   },
        // },
        chart: {
          type: 'packedbubble',
          height: '80%',
        },
        title: {
          text: 'Index',
        },
        series: [
          {
            name: 'Coffee', // Coffee series
            data: [
              {
                // name property is used for the datalabel
                // value property is used for the volume of the bubble
                value: 12,
                name: 'パン',
              },
              {
                value: 5,
                name: 'ジョン',
              },
              {
                value: 10,
                name: 'サラダ',
              },
              {
                value: 7,
                name: 'Cecile',
              },
            ],
          },
          {
            name: 'Energy drinks', // Energy drinks series
            data: [
              {
                value: 10,
                name: 'Tristan',
              },
            ],
          },
          {
            name: 'Tea', // Tea series
            data: [
              5,
              6,
              8,
              {
                value: 10,
                name: 'Mustapha',
                color: 'pink',
              },
            ],
          },
        ],
      },
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
