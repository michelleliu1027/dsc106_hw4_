Highcharts.chart('ChartPlaceHolder_2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'McDonald Food Preferences in Different Locations'
    },
    xAxis: {
        categories: [
            'NE',
            'SW',
            'NW',
            'SE',
            'C'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of consumptions'
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
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'HM',
        data: [65362334, 64421707, 63572000, 62328614, 61582375]

    }, {
        name: 'CF',
        data: [27233220,26815953, 26341429, 26039450, 25724566]

    }, {
        name: 'FF',
        data: [16345942, 16104137, 15821178, 15614539, 15540968]

    }]
});