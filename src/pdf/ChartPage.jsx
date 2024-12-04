
// ChartPage.js
import React from "react";
import ApexCharts from "react-apexcharts";

const ChartPage = ({ chartData, chartIndex, startIndex }) => {
  return (
    <div style={{ marginBottom: "40mm" }}>
      <h3>Chart {chartIndex + 1}</h3>
      <ApexCharts
        options={chartData.options}
        series={[chartData.series[startIndex]]}
        type="line"
        width="100%"
        height="300"
      />
      <h3>Chart {chartIndex + 2}</h3>
      <ApexCharts
        options={chartData.options}
        series={[chartData.series[startIndex + 1]]}
        type="line"
        width="100%"
        height="300"
      />
    </div>
  );
};

export default ChartPage;
