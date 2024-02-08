import React from 'react'
import LineChart from '../../components/line-chart'
import BarChart from '../../components/bar-chart'
import DoughnutChart from '../../components/doughnut-chart'

export default function MyChart() {
  return (
    <div className='App'>
      <div className='dataCard revenueCard'>
      <LineChart/>
      </div>
      <div className='dataCard customerCard'>
      <BarChart/>
      </div>
      <div className='dataCard categoryCard'>
      <DoughnutChart/>
      </div>
    </div>
  )
}
