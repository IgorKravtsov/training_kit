import React, { useRef, useEffect, useState } from 'react'
import type { ChartData, ChartArea } from 'chart.js'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple']

const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
  const colorStart = faker.random.arrayElement(colors)
  const colorMid = faker.random.arrayElement(colors.filter(color => color !== colorStart))
  const colorEnd = faker.random.arrayElement(colors.filter(color => color !== colorStart && color !== colorMid))

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(0.5, colorMid)
  gradient.addColorStop(1, colorEnd)

  return gradient
}

interface ChartSectionProps {
  values: number[]
  labels: string[]
}

const ChartSection: React.FC<ChartSectionProps> = ({ values, labels }): React.ReactElement => {
  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  })

  useEffect(() => {
    const chart = chartRef.current

    if (!chart) {
      return
    }

    const chartData = {
      labels,
      datasets: [{ data: values, borderColor: createGradient(chart.ctx, chart.chartArea) }],
    }

    setChartData(chartData)
  }, [])

  return <Chart ref={chartRef} type='line' data={chartData} />
}

export default ChartSection
