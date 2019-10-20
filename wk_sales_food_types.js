var series = [
    {
        name:"Hamburger",
        data:[725474, 721367, 725219, 717869, 909605, 901832, 897282]

      },
      {
        name:"Chicken Fillet",
        data:[308175, 302101, 305797, 303620, 379496, 369303, 384179]

      },
      {
        name:"Fish Fillet",
        data:[179006, 176625, 184822, 193430, 263834, 200532, 201411]
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
        //   enabled: true,
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
    

var tooltip = {
    split: true
}

var json = {};
    
json.title = title;
json.chart = chart;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;
json.series = series;
json.plotOptions = plotOptions;
json.chart = chart;
json.tooltip = tooltip

var someVar = document.getElementById("ChartPlaceHolder_weekly_foods")
console.log(series)
Highcharts.chart(someVar,json)
