Highcharts.chart('ChartPlaceHolder_2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'What is the Most Popular McDonald Products in Those 5 Regions? ',
        style: {
            fontWeight: 'bold'
        }
    },
    xAxis: {
        categories: [
            'North East',
            'South West',
            'North West',
            'South East',
            'Central'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Dollars'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:30px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        useHTML: true
    },
    plotOptions: {
        series:{
            // stacking:'normal',
            dataLabels: {
            enabled: true
            }
        },
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Hamburger',
        data: [65362334, 64421707, 63572000, 62328614, 61582375]

    }, {
        name: 'Chicken Fillet',
        data: [27233220,26815953, 26341429, 26039450, 25724566]

    }, {
        name: 'Fish Fillet',
        data: [16345942, 16104137, 15821178, 15614539, 15540968]

    }]
});