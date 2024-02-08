import React from "react";
import { Line } from "react-chartjs-2";
import revenueData from "../data/revenueData.json";

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
    />
  );
}
