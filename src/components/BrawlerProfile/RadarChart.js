import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data() {
    return {
      chartdata: {
        labels: ['Offense', 'Defense', 'Utility'],
        datasets: this.chartDatasets,
      },
      options: {
        scale: {
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
  props: {
    chartDatasets: Array
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartdata, this.options)
  },
  watch: {
    chartDatasets: function() { this.renderChart(this.chartdata, this.options) }
  }
}