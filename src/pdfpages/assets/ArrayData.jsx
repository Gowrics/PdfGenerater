export const chartData = [
    {
      series: [
        {
          name: "Sample Data 1",
          data: [10, 20, 15, 30, 40, 35],
        },
      ],
      options: {
        chart: {
          type: "line",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
      },
    },
    {
      series: [
        {
          name: "Sample Data 2",
          data: [5, 25, 20, 35, 45, 40],
        },
      ],
      options: {
        chart: {
          type: "line",
        },
        xaxis: {
          categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
      },
    },
    {
      series: [
        {
          name: "Sample Data 3",
          data: [15, 30, 25, 40, 50, 45],
        },
      ],
      options: {
        chart: {
          type: "line",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
      },
    },
    {
        series: [
          {
            name: "Sample Data 4",
            data: [10, 20, 15, 30, 40, 35],
          },
        ],
        options: {
          chart: {
            type: "line",
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          },
        },
      },
  
  ];
  
  export const  timeScore100 = [
    { time: '11.11', scoreType: 'High Score',measurement:'s' },
    { time: '11.35', scoreType: 'Avg. Score', measurement:'s'},
    { time: '11 25', scoreType: 'Season Best', measurement:'s' },
    { time: '11.50', scoreType: 'Min Score', measurement:'s' }
  ];
  export const  timeScore200 = [
    { time: '22.12', scoreType: 'High Score', measurement:'s' },
    { time: '22.35', scoreType: 'Avg. Score' , measurement:'s'},
    { time: '22 25', scoreType: 'Season Best' , measurement:'s'},
    { time: '23.51', scoreType: 'Min Score', measurement:'s' }
  ];  export const  timeScoreLong = [
    { time: '7.12', scoreType: 'High Score' , measurement:'m'},
    { time: '6.99', scoreType: 'Avg. Score' , measurement:'m'},
    { time: '6 95', scoreType: 'Season Best' , measurement:'m'},
    { time: '6.50', scoreType: 'Min Score', measurement:'m' }
  ];
  export const rankData = [
    { label: "District", rank: "01", total: "368" },
    { label: "State", rank: "01", total: "368" },
    { label: "National", rank: "01", total: "368" },
  ];  

//array for Chart
const charts = [
  {
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%", // Adjust the width as a percentage of the available space
        },
      },
      xaxis: {
        categories: ["Sep-5", "Sep-12", "Sep-19"],
      },
      yaxis: {
        title: {
          text: "Time Duration (s)",
        },
        min: 9.0,
        max: 12.0,
        tickAmount: 6,
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      annotations: {
        xaxis: [
          {
            y: 9.00,
            borderColor: "#1F1F1F", 
            strokeDashArray: [1, 10],
            strokeWidth: 100,
          },
          {
            y: 10.00,
            borderColor: "#1F1F1F", 
            strokeDashArray: [1, 10],
            strokeWidth: 100,
          },
        ],
        yaxis: [
          {
            y: 9.00,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 3],
            strokeWidth: 100,
          },
          {
            y: 9.50,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 3],
            strokeWidth: 100,
          },
          {
            y: 10.00,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 3],
            strokeWidth: 100,
          },
          {
            y: 10.50,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 3],
            strokeWidth: 100,
          },
        ],
      },
      colors: ["#64B4B7"],
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Time Duration",
        data: [11.75, 11.50, 12.85],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
        },
      },
      xaxis: {
        categories: ["Oct-5", "Oct-12", "Oct-19"],
      },
      yaxis: {
        title: {
          text: "Time Duration (s)",
        },
        min: 9.0,
        max: 12.0,
        tickAmount: 6,
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      annotations: {
        xaxis: [
          {
            y: 9.00,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 10],
            strokeWidth: 100,
          },
        ],
        yaxis: [
          {
            y: 9.00,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 3],
            strokeWidth: 100,
          },
        ],
      },
      colors: ["#FF5733"], // Different color for the second chart
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Time Duration",
        data: [10.5, 11.25, 12.0],
      },
    ],
  },
  {
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
        },
      },
      xaxis: {
        categories: ["Nov-5", "Nov-12", "Nov-19"],
      },
      yaxis: {
        title: {
          text: "Time Duration (s)",
        },
        min: 9.0,
        max: 12.0,
        tickAmount: 6,
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      annotations: {
        xaxis: [
          {
            y: 9.00,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 10],
            strokeWidth: 100,
          },
        ],
        yaxis: [
          {
            y: 9.00,
            borderColor: "#1F1F1F",
            strokeDashArray: [1, 3],
            strokeWidth: 100,
          },
        ],
      },
      colors: ["#28A745"], // Different color for the third chart
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Time Duration",
        data: [11.5, 11.8, 12.2],
      },
    ],
  },
];

//