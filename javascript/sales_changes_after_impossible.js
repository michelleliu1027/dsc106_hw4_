Highcharts.chart('ChartPlaceHolder_impossible', {
    chart: {
        type: 'column'
    },
    title: {
        style: {
            fontWeight: 'bold'
        },
        text: 'What Happened After the "Incursion" of Impossible Burgers? (Oct. 2018 - Sep. 2019)',
        
    },
    xAxis: {
        categories: ['Sep-18', 'Oct-18', 'Nov-18',
        'Dec-18', 'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19',
        'Jul-19', 'Aug-19', 'Sep-19'],

        crosshair: true
    },
    yAxis: {
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
        name: 'North East Monthly Changes',
        data: [Number.NaN,
            -399682.0,
            239502.0,
            -186949.0,
            220397.0,
            -87582.0,
            753.0,
            -10620.0,
            148691.0,
            -178479.0,
            -59869.0,
            58204.0,
            -19491.0]

    }, {
        name: 'South West Monthly Changes',
        data: [Number.NaN,
            -421400.0,
            237405.0,
            -173726.0,
            172514.0,
            12763.0,
            -90780.0,
            93286.0,
            -14328.0,
            -175700.0,
            -27837.0,
            72428.0,
            29666.0]

    }, {
        name: 'North West Monthly Changes',
        data: [Number.NaN,
            -381968.0,
            127373.0,
            -176727.0,
            318043.0,
            -123558.0,
            -14469.0,
            -15906.0,
            149506.0,
            -179648.0,
            -49995.0,
            75471.0,
            16453.0]

    },{
        name: 'South East Monthly Changes',
        data: [Number.NaN,
            -362667.0,
            153160.0,
            -70717.0,
            184911.0,
            -89224.0,
            -17512.0,
            12040.0,
            79594.0,
            -190776.0,
            -44369.0,
            108207.0,
            18403.0]

    },{
        name: 'Central Monthly Changes',
        data: [Number.NaN,
            -307517.0,
            168060.0,
            -152321.0,
            123775.0,
            7313.0,
            -82115.0,
            96960.0,
            72570.0,
            -163311.0,
            -68154.0,
            92663.0,
            -18330.0]

    }]
});