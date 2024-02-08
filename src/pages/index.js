import React from 'react'
import {Chart as ChartJS, defaults} from "chart.js/auto"
import { Line } from 'react-chartjs-2'

export default function MyChart() {
  return (
    <div className='App'>
      <div className='dataCard revennueCard'>
      </div>
      <div className='dataCard customerCard'>
      </div>
      <div className='dataCard categoryCard'>
      </div>
    </div>
  )
}
