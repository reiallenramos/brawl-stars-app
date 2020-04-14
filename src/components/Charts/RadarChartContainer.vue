<template lang="pug">
  div
    radar-chart(:chartDatasets="chartDatasets")
</template>

<script>
import RadarChart from './RadarChart.js'

export default {
  name: 'RadarChartContainer',
  components: {
    RadarChart
  },
  props: {
    chartDatasets: Array
  }
}
</script>
