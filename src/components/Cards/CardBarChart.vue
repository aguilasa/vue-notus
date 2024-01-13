<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-slate-400 mb-1 text-xs font-semibold">
            Performance
          </h6>
          <h2 class="text-slate-700 text-xl font-semibold">Total orders</h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#ed64a6',
            borderColor: '#ed64a6',
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              fontColor: 'rgba(0,0,0,.4)',
            },
            align: 'end',
            position: 'bottom',
          },
          title: {
            display: false,
            text: 'Orders Chart',
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
        },
        scales: {
          x: {
            display: false,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
            border: {
              dash: [2],
              borderDash: 2,
            },
            grid: {
              color: 'rgba(33, 37, 41, 0.3)',
            },
          },
          y: {
            display: true,
            scaleLabel: {
              display: false,
              labelString: 'Value',
            },
            border: {
              dash: [2],
              dashOffset: 2,
              display: false,
            },
            grid: {
              color: 'rgba(33, 37, 41, 0.2)',
            },
          },
        },
      },
    }
  },
}
</script>
