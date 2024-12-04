// ChartComponent.js
import React from "react";
import ApexCharts from "react-apexcharts";

const ChartComponent = ({ options, series, type = "line", width = "100%", height = "300" }) => {
  return (
    <ApexCharts
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default ChartComponent;
