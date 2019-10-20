var series = [
    {
        name:"North East Daily Average Sales",
        data:[62547.0,
            62738.5,
            62629.25,
            64903.0,
            59813.99999999999,
            58755.59999999999,
            63375.2]

      },
      {
        name:"South West Daily Average Sales",
        data:[60272.25, 59319.25, 61150.5, 59837.25, 64433.0, 58117.0, 59841.4]

      },
      {
        name:"North West Daily Average Sales",
        data:[61255.0,
            60442.75,
            61153.5,
            60937.25,
            61949.99999999999,
            59045.2,
            58294.200000000004]
      },
      {
        name:"South East Daily Average Sales",
        data:[58164.5, 58320.5, 59346.75, 58514.0, 61971.4, 58740.6, 56822.600000000006]
      },
      {
        name:"Central Daily Average Sales",
        data:[60925.0,
            59202.25,
            59679.5,
            59538.25,
            62418.6,
            59675.00000000001,
            58241.00000000001]
      }

    
    
    
    
    
    
    
    
    ]


var chart = {
    type: 'bar',
    spacingBottom: 0,
    spacingTop: 30,
    spacingLeft: 10,
    spacingRight: 10,

    // Explicitly tell the width and height of a chart
    width: null,
    height: null
}
      
var title = {
    style: {
        fontWeight: 'bold'
    },
    text: "Which Day in a Week is the <i>Lucky Day</i> for McDonald to Sell Most in Jan. 2016? ",
    x: 30,
    y: 5
}
    
var xAxis = {
        
        categories:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday']};

  
    
var yAxis = {
        title:{
            text: "Dollars",
            fontWeight: 'bold'
                },
        stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
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
    
    //console.log(series)
var json = {};
    
json.title = title;
json.chart = chart;
json.xAxis = xAxis;
json.yAxis = yAxis;
// json.legend = legend;
json.series = series;
json.plotOptions = plotOptions;
json.chart = chart


var someVar = document.getElementById("ChartPlaceHolder_weekly")
console.log(series)
Highcharts.chart(someVar,json)
