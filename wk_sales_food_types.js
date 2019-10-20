var series = [
    {
        name:"Hamburger",
        data:[181368.5,
            180341.75,
            181304.75,
            179467.25,
            181921.0,
            180366.4,
            179456.40000000002]

      },
      {
        name:"Chicken Fillet",
        data:[77043.75, 75525.25, 76449.25, 75905.0, 75899.2, 73860.59999999999, 76835.8]

      },
      {
        name:"Fish Fillet",
        data:[44751.5, 44156.25, 46205.5, 48357.5, 52766.8, 40106.4, 40282.200000000004]
      }
    
    
    
    
    
    
    
    
    ]


var chart = {
    type: 'area',
    spacingBottom: 0,
    spacingTop: 30,
    spacingLeft: 10,
    spacingRight: 10,

    // Explicitly tell the width and height of a chart
    width: null,
    height: 700
}
      
var title = {
    style: {
        fontWeight: 'bold'
    },
    text: "What is the Influence of Days on Sales of Individual Products on Jan. 2016",
    x: 30,
    y: 5
}
    
var xAxis = {
        
        categories:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday']};

  
    
var yAxis = {
        title:{
            text: "Total Daily Sales of Different Products (Dollars)",
            fontWeight: 'bold'
                },
        stackLabels: {
        //   enabled: true,
          style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray',
          }
        }
      };


    

// var legend = {
//     align: 'middle',
//     x: 500,
//     verticalAlign: 'top',
//     y: 20,
//     floating: true,
//     borderColor: '#CCC',
//     borderWidth: 1,
//     shadow: false
//   };
  
    

var plotOptions = {
    series:{
        stacking:'normal',
        dataLabels: {
        enabled: true
        }
    }

    };
    

var tooltip = {
    split: true
}

var json = {};
    
json.title = title;
json.chart = chart;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.series = series;
json.plotOptions = plotOptions;
json.chart = chart;
json.tooltip = tooltip

var someVar = document.getElementById("ChartPlaceHolder_weekly_foods")
console.log(series)
Highcharts.chart(someVar,json)
