import React from "react";
import {Chart as ChartJS, defaults} from "chart.js/auto"
import { Line } from "react-chartjs-2";
import revenueData from "../data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "#333";

export default function LineChart() {
  return (
    <Line
      data={{
        labels: revenueData.map((data) => data.label),
        datasets: [
          {
            label: "Revenue",
            data: revenueData.map((data) => data.revenue),
            backgroundColor: "#2884E6",
            borderColor: "#2884E6"
          },
          {
            label: "Cost",
            data: revenueData.map((data) => data.cost),
            backgroundColor: "#FD766A",
            borderColor: "#FD766A"
          },
        ],
      }}
      options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
    />
  );
}
