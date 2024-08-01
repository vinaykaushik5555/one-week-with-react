import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StackedColumnChart = () => {
    const options = {
        chart: {
            type: 'column',
        },
        title: {
            text: 'Stacked Column Chart with Totals',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'March', 'April', 'May'],
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Interactions',
            },
            stackLabels: {
                enabled: true,
                formatter: function () {
                    return this.total;
                },
                style: {
                    fontWeight: 'bold',
                    color: (
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray',
                },
            },
        },
        legend: {
            enabled: true,
            reversed: false,
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                },
            },
        },
        series: [
            {
                name: 'FICC',
                data: [10, 12, 5, 4, 8],
            },
            {
                name: 'EQ',
                data: [1, 3, 4, 7, 2],
            },
        ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StackedColumnChart;
