import React from "react";
import { Doughnut } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";

export default function DoughnutChart() {
  return (
    <Doughnut
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
            borderColor: [
              "rgba(255, 166, 158, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(86, 213, 233, 0.8)",
            ],
          },
        ],
      }}
    />
  );
}
