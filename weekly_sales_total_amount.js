var series = [
    {
        name:"NE_TOTAL",
        data:[250188, 250954, 250517, 259612, 299070, 293778, 316876]

      },
      {
        name:"SW_TOTAL",
        data:[241089, 237277, 244602, 239349, 322165, 290585, 299207]

      },
      {
        name:"NW_TOTAL",
        data:[245020, 241771, 244614, 243749, 309750, 295226, 291471]
      },
      {
        name:"SE_TOTAL",
        data:[232658, 233282, 237387, 234056, 309857, 293703, 284113]
      },
      {
        name:"C_TOTAL",
        data:[243700, 236809, 238718, 238153, 312093, 298375, 291205]
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
    text: "Weekly total sales in Mcdonald products (Jan. 2016)",
    x: 30,
    y: 5
}
    
var xAxis = {
        
        categories:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday']};

  
    
var yAxis = {
        title:{
            text: "Number of Sales",
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


    

var legend = {
    align: 'middle',
    x: 500,
    verticalAlign: 'top',
    y: 20,
    floating: true,
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  };
  
    

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
json.legend = legend;
json.series = series;
json.plotOptions = plotOptions;
json.chart = chart


var someVar = document.getElementById("ChartPlaceHolder_weekly")
console.log(series)
Highcharts.chart(someVar,json)
