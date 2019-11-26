Highcharts.ajax({
    url: "data/relations_to_finn.json",
    dataType: 'text',
    success: function(activity) {
        activity = JSON.parse(activity);
        // console.log(activity)

        nodes = []
        for (var key in activity) {
            if (activity.hasOwnProperty(key)) {
                // console.log(key)
                link = ['Finn Wolfhald']
                link.push(key)
                // link.push(activity[key])
                nodes.push(link)
            }
        }
        console.log(nodes)

Highcharts.chart('network', {
    chart: {
        type: 'networkgraph',
        height: '100%',
        backgroundColor: 'transparent',    },
    title: {
        text: 'Most actress / actors in Stranger Things only cooperate with Finn once',
        y:10
    },

    subtitle: {
        text: 'Info source: <a href="https://www.imdb.com/name/nm6016511/?ref_=tt_ov_st_sm">www.imdb.com</a>'
    },

    plotOptions: {
        networkgraph: {
            layoutAlgorithm: {
                enableSimulation: true,
                friction: -0.9
            }
        }
    },

    series: [{
        dataLabels: {
            enabled: true,
            linkFormat: '1'
            
        },

        marker: {
            radius: 20
        },
        data: nodes.slice(0,30),
        nodes: [{
            id: 'Finn Wolfhald',
            color: 'red'
        }]
    }],
});
    }
})

