
var series = [
    {
        name:"Average number of consumptions",
        data:[['North East',2420922],
            ['South West',2385373],
        ['North West', 2349657],
        ['South East',2310724],
        ['Central', 2285509]
        ]
    }
    ]


var chart = {
    type: 'pie'
}
      
var title = {
    style: {
        fontWeight: 'bold'
    },
    text: "Which Region Contributed the Most in Average Sales of Those McDonald Products? "
}



var tooltip = {

    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'

}

var plotOptions = {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
    }
}

    

var legend = {
    align: 'left',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  };
  

var json = {};
    
json.title = title;
json.chart = chart;
json.legend = legend;
json.series = series;
json.plotOptions = plotOptions;

var someVar = document.getElementById("ChartPlaceHolder_pie")
console.log(series)
Highcharts.chart(someVar,json)