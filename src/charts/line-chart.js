import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['datasets', 'options'],
  mounted() {
    this.renderChart(this.datasets, options)
  }
}