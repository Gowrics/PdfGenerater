import React from "react";
import ApexCharts from "react-apexcharts";

const ChartComponent = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar:{show:false,},
    },
    xaxis: {
      categories: ["Sep-5", "Sep-12", "Sep-19"], // X-axis labels
    },
    
    yaxis: {
      title: {
        text: "Time Duration (s)",
      },
      min: 9.0, // Y-axis starting value
      max: 12.0, // Y-axis ending value
      tickAmount: 5, // Number of ticks
    },
    annotations: {
      yaxis: [
        {
          y: 9,
          borderColor: "black",
          label: {
            borderColor: "red",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
        {
          y:10,
          borderColor: "#00E396",
          label: {
            borderColor: "red",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },
        {
          y:9.30,
          borderColor: "green",
          label: {
            borderColor: "red",
            style: {
              color: "#fff",
              background: "#00E396",
            },
          },
        },


      ],
    },
  };

  const series = [
    {
      name: "Time Duration",
      data: [11.75, 11.50, 11.85], // Y-axis data
    },
  ];

  return (
    <ApexCharts 
      options={options}
      series={series}
      type="bar"
      width="70%"
      height="200"
    />
  );
};

export default ChartComponent;
