import React from "react";
import ApexCharts from "react-apexcharts";

const ChartComponent = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false, // Ensure the bars are vertical (default is vertical)
        columnWidth: "40%", // Adjust the width as a percentage of the available space
      },
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
      tickAmount: 6, // Total number of ticks (including 9.0 and 12.0)
      labels: {
        formatter: function (value) {
          return value.toFixed(2); // Format to display two decimal places
        },
      },
      // reversed: true, 
    },
        annotations: {
      //borders
      xaxis: [
        {
          y: 9.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,10], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        {
          y: 10.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,10], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
      ],
      yaxis: [
        {
          y: 9.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        {
          y: 9.50,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },

        {
          y: 10.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        {
          y: 10.50,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        {
          y: 11.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        {
          y: 11.50,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        {
          y: 12.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], 
          strokeWidth: 100, 
         },
        
        
        //......................................
        {
          y: 9.58, borderColor: "#12B368", //green
            strokeDashArray: 0, // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        
        {
          y: 10.23,
          borderColor: "#FFA857", //orange
          strokeDashArray: 0, // Solid line
          strokeWidth: 100, // Increase border thickness
          
        },
        {
          y: 10.26,
          borderColor: "#0082D2",  //blue
          strokeDashArray: 0, // Solid line
          strokeWidth: 100, // Increase border thickness
          
        },
        {
          y: 11.11,
          borderColor: "#818792", //gray
          strokeDashArray: 0, // Solid line
          strokeWidth: 100, // Increase border thickness
          
        },
        {
          y: 11.50,
          borderColor: "#EF80AC", //pink
          strokeDashArray: 0, // Solid line
          strokeWidth: 100, // Increase border thickness
          
        },
      ],
      xaxis: [
        {
          y: 9.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
        {
          x: 206.00,
          borderColor: "#1F1F1F", //black
          strokeDashArray: [1,3], // Solid line
          strokeWidth: 100, // Increase border thickness
        },
      ],
      
    },
    colors: ["#64B4B7"], // Change the bar color
    dataLabels: {
      enabled: false, // Disable data labels
    },
  };

  const series = [
    {
      name: "Time Duration",
      data: [11.75, 11.50, 12.85], // Y-axis data
    },
  ];

  return (
    <div style={{marginTop:'-13px'}}>
    <ApexCharts
      options={options}
      series={series}
      type="bar"
      width="100%"
      height="230"
    />
    </div>
  );
};


export default ChartComponent;
