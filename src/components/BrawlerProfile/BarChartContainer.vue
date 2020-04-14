<template lang="pug">
  div
    bar-chart(:chartDatasets="chartDatasets")
</template>

<script>
import BarChart from './BarChart.js'

export default {
  name: 'BarChartContainer',
  components: {
    BarChart
  },
  props: {
    chartDatasets: Array
  }
}
</script>
