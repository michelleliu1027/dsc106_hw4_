// Highcharts.ajax({
//     url: "/data/female_rating.json",
//     dataType: 'text',
//     success: function(activity) {
//         activity = JSON.parse(activity);
//         console.log(activity)
//     }
// })

function female_click() {
    female = document.getElementById('radar_female');
    console.log(female)
    male = document.getElementById('radar_male');
    console.log(male)

    male.style.display = "none";
    male.style.visibility = 'hidden';
    female.style.visibility = 'visible';
    female.style.display = "block";


}

function male_click() {
    female = document.getElementById('radar_female');
    male = document.getElementById('radar_male');

    female.style.visibility = 'hidden';
    female.style.display = "none";
    male.style.display = "block";
    male.style.visibility = 'visible';
}

Highcharts.chart('radar_male', {

    chart: {
        polar: true,

        },

    title: {
        text: 'Male tends to love Stranger Things more!',
        y:10
    },

    subtitle: {
        text: 'male in rating for Stranger Things'
    },

    pane: {
        size:'100%'
    },

    xAxis: {
        categories: ['rating: 1', 'rating: 2', 'rating: 3', 'rating: 4',
            'rating: 5', 'rating: 6','rating: 7','rating: 8','rating: 9','rating: 10'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        min:0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },

    series: [ {
        type: 'area',
        name: 'Males Aged 18-29',
        data: [888, 182, 264, 405, 961, 2612, 8398, 23685, 40340, 45409]
    },
    {
        type: 'area',
        name: 'Males Aged 30-44',
        data: [843, 273, 386, 627, 1322, 3500, 10350, 27543, 46892, 49558]
    },
    {
        type: 'area',
        name: 'Males Aged 45+',
        data: [321, 132, 188, 270, 518, 1091, 2714, 6556, 10076, 9285]
    },
    {
        type: 'area',
        name: 'Males Aged under 18',
        data: [ 23,5, 7, 5,13, 35,95, 229, 380, 639]
    }],

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: {point.y:,.0f} persons</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

Highcharts.chart('radar_female', {

    chart: {
        polar: true,
        
    },

    title: {
        text: 'Male tends to love Stranger Things more!',
        y:10
    },

    subtitle: {
        text: 'female in rating for Stranger Things'
    },

    pane: {
        size:'100%'
    },

    xAxis: {
        categories: ['rating: 1', 'rating: 2', 'rating: 3', 'rating: 4',
            'rating: 5', 'rating: 6','rating: 7','rating: 8','rating: 9','rating: 10'],
        tickmarkPlacement: 'on',
        lineWidth: 0,
        min:0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        min: 0,
        max:50000
    },

    series: [{
        type: 'area',
        name: 'Females Aged 18-29',
        data: [191, 69, 108, 169, 305, 862, 2774, 7634,12870, 19024]
    },
    {
        type: 'area',
        name: 'Females Aged 30-44',
        data: [188,87,101, 155, 364, 739, 2586,6750, 11707, 16096]
    },
    {
        type: 'area',
        name: 'Females Aged 45+',
        data: [95, 46, 55, 60, 121,255,673,1662,2829, 3778]
    },
    {
        type: 'area',
        name: 'Females Aged under 18',
        data: [ 23,5, 7, 5,13, 35,95, 229, 380, 639]
    }],

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: {point.y:,.0f} persons</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle'
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});