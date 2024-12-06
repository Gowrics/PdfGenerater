import React from 'react';
import ApexCharts from 'react-apexcharts';

const ChartPage = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    annotations: {
      yaxis: [
        {
          y: 10.5,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'Target Time',
          },
        },
      ],
      xaxis: [
        {
          x: 'Sep-12',
          borderColor: '#775DD0',
          label: {
            style: {
              color: '#fff',
              background: '#775DD0',
            },
            text: 'Midpoint',
          },
        },
      ],
    },
    xaxis: {
      categories: ['Sep-5', 'Sep-12', 'Sep-19'],
      title: {
        text: 'Date',
      },
    },
    yaxis: {
      title: {
        text: 'Time Duration (s)',
      },
      min: 9.0,
      max: 12.0,
      tickAmount: 6,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
      },
    },
    fill: {
      colors: ['#FF4560'],
    },
    title: {
      text: 'Time Duration Analysis',
      align: 'center',
    },
  };

  const chartSeries = [
    {
      name: 'Time Duration',
      data: [11.5, 10.8, 9.5], // Corresponding values for Sep-5, Sep-12, Sep-19
    },
  ];

  return (
    <div>
      <ApexCharts
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={150}
      />
    </div>
  );
};

export default ChartPage;