<template>
  <div class="container">
    <highchart
      :options="chartOptions"
      :update="['options.title', 'options.series']"
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
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
              splitSeries: false,
              gravitationalConstant: 0.02,
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 250,
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal',
              },
            },
          },
        },
        chart: {
          type: 'packedbubble',
        },
        title: {
          text: 'Highmaps (Africa) basic demo',
        },
        series: [
          {
            name: 'Coffee', // Coffee series
            data: [
              {
                // name property is used for the datalabel
                // value property is used for the volume of the bubble
                value: 12,
                name: 'Bert',
              },
              {
                value: 5,
                name: 'John',
              },
              {
                value: 10,
                name: 'Sandra',
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
.highcharts-data-table table {
  min-width: 320px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>
