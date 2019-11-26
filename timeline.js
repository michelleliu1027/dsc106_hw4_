Highcharts.ajax({
    url: "/data/timeline_2.json",
    dataType: 'text',
    success: function(activity) {
        activity = JSON.parse(activity);
        // console.log(activity)

        timeline_data = []
        for (var key in activity) {
            // check if the property/key is defined in the object itself, not in parent
            if (activity.hasOwnProperty(key)) {
                to_add = {}
                to_add['name'] = key
                avg_rating = 0
                descriptions = []

                for (data = 0; data < activity[key].length; data++){
                    descriptions.push('<br>' +activity[key][data]['title']+ '<b>'+" rating: "+ activity[key][data]['rating']+'</b>')
                    avg_rating += activity[key][data]['rating']
                }
                avg_rating = avg_rating / activity[key].length
                labels = []
                labels.push('number of shows: '+'<b>'+activity[key].length+'</b>'+'<br>' + 'average rating of shows: ' + '<b>'+avg_rating+'</b>')
                
                // for (data = 0; data < activity[key].length; data++){
                //     // labels.push(activity[key][data]['title']+": "+ activity[key][data]['rating'])
                //     labels.push(activity[key][data].length)
                // }
                // console.log(descriptions)
                to_add['label'] = labels
                to_add['description'] = descriptions
            timeline_data.push(to_add)
            }
        }
        // console.log(timeline_data);

        Highcharts.chart('container', {
            chart: {
                type: 'timeline',
                backgroundColor: 'transparent',
                plotBorderWidth:'2px'
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            title: {
                text: "Timeline of Finn Wolfhard's shows "
            },
            subtitle: {
                text: 'Info source: <a href="https://www.imdb.com/name/nm6016511/?ref_=tt_ov_st_sm">www.imdb.com</a>'
            },
            series : [{data: timeline_data}]
            });
    }
})





