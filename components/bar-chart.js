import React from "react";
import {Chart as ChartJS, defaults} from "chart.js/auto"
import { Bar } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "#333";

export default function BarChart() {
  return (
    <Bar
      data={{
        labels: sourceData.map((data) => data.label),
        datasets: [
          {
            label: "Count",
            data: sourceData.map((data) => data.value),
            backgroundColor: [
              "rgba(255, 166, 158, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(86, 213, 233, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      }}
      options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
    />
  );
}
