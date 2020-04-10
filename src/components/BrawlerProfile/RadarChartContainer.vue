<template lang="pug">
  radar-chart(:chartdata="chartdata", :options="options")
</template>

<script>
import RadarChart from './RadarChart.js'

export default {
  name: 'RadarChartContainer',
  data() {
    return {
      chartdata: {
        labels: ['Offense', 'Defense', 'Utility'],
        datasets: [{
          label: '',
          data: [],
          backgroundColor: 'rgba(214,212,233,0.5)'
        },
      ],
      },
      options: {
        scale: {
          angleLines: {
          },
          ticks: {
            display: true,
            beginAtZero: true,
            max: 5,
            stepSize: 1
          }
        }
      }
    }
  },
  components: {
    RadarChart
  },
  props: {
    brawlerName: String,
    offense: Number,
    defense: Number,
    utility: Number,
  },
  created() {
    let props = this.$props;
    this.chartdata.datasets[0].label = props.brawlerName;
    this.chartdata.datasets[0].data = [props.offense, props.defense, props.utility];
  }
}
</script>
