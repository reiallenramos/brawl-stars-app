import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data() {
    return {
      chartdata: {
        labels: ['Offense', 'Defense', 'Utility'],
        datasets: this.chartDatasets
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0
              }
            }
          ]
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