<template>
  <div class="container">
    <div>
      <highchart
        :modules="['chart']"
        :map="mapChart"
        :options="chartOptions"
        :update="watchers"
      />
      <p>index</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Highmaps (Africa) basic demo',
      // mapChart: {
      // It's important for mapName to match exactly
      // chartOptions.chart.map below
      // (since that's where the library renders to)
      // mapName: 'africa',
      // mapData: AfricaMapData,
      // mapData: '/africa.geo.json' // Also works (if this is in static folder)
      // },
      watchers: ['options.title'],
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
