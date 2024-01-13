<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-700"
  >
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-slate-100 mb-1 text-xs font-semibold">
            Overview
          </h6>
          <h2 class="text-white text-xl font-semibold">Sales value</h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <div class="relative h-350-px">
        <LineChart :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>
<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line as LineChart } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export default {
  name: 'card-line-chart',
  components: {
    LineChart,
  },
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
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#fff',
            borderColor: '#fff',
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        datasets: {
          line: {
            tension: 0.4,
          },
        },
        plugins: {
          title: {
            display: false,
            text: 'Sales Charts',
            font: {
              color: 'white',
            },
          },
          legend: {
            labels: {
              color: 'white',
            },
            align: 'end',
            position: 'bottom',
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(255,255,255,.7)',
            },
            display: true,
            title: {
              display: false,
              text: 'Month',
              color: 'white',
            },
            border: {
              dash: [2],
              dashOffset: 2,
              display: false,
            },
            grid: {
              display: false,
              color: 'rgba(33, 37, 41, 0.3)',
              lineWidth: [2],
            },
          },
          y: {
            ticks: {
              color: 'rgba(255,255,255,.7)',
              padding: 10,
            },
            display: true,
            title: {
              display: false,
              text: 'Value',
              color: 'white',
            },
            border: {
              dash: [3],
              dashOffset: 3,
              display: false,
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.15)',
              lineWidth: [2],
              drawTicks: false,
            },
          },
        },
      },
    }
  },
}
</script>
