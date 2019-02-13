// d3.json("/static/data/page1.json", function(data) {
//     console.log(data);
// });

queue()
    .defer(d3.json, "static/data/page1.json")
    .await(makeGraphs);
    
function makeGraphs(error, tickets) {
    tickets.results.forEach(function(d){
        //console.log(typeof(d.date)); //check the type before it changes
        var orgDate = new Date(d.created_at); // changes the string date into origional date type
        dayDate = orgDate.getDate();
        d.created_at = dayDate; // Overwrite the String date with Original date type
        //console.log(typeof(d.date)); //check the type after make change, you can see it converts into date object
        var randomSatisfaction = Math.floor((Math.random() * 10) + 1);
        d.satisfaction = randomSatisfaction;
        //console.log(d.id + " : " + d.satisfaction_rating); //Used to test output before creating chart
        
    });

   
    
    var ndx = crossfilter(tickets.results);

    show_ticket_type_selector(ndx);
    show_tickets_per_technician(ndx);
    show_tickets_per_facility(ndx);
    show_tickets_per_user_id(ndx);
    show_tickets_per_day(ndx);
    show_user_satisfaction(ndx);

    dc.renderAll();

}

function show_ticket_type_selector(ndx) {
    
    
    dim = ndx.dimension(dc.pluck('call_type'));
    group = dim.group();

    dc.selectMenu("#ticket-type-selector")
        .dimension(dim)
        .group(group);
}

function show_tickets_per_technician(ndx) {
    var dim = ndx.dimension(dc.pluck('assignee_id'));
    var group = dim.group();

    dc.barChart("#tickets-technician")
        .width(600)
        .height(300)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Technician")
        .yAxisLabel("Tickets")
        .elasticY(true)
        .yAxis().ticks(20);
}

function show_tickets_per_facility(ndx) {
    var dim = ndx.dimension(dc.pluck("facility"));
    var group = dim.group();

    dc.pieChart("#tickets-by-facility")
        .width(400)
        .height(400)
        .slicesCap(4)
        .innerRadius(100)
        .dimension(dim)
        .group(group);
}

function show_tickets_per_user_id(ndx) {
    var dim = ndx.dimension(dc.pluck("requester_id"))
    var group = dim.group();

    dc.pieChart("#tickets-per-user-id")
        .width(300)
        .height(300)
        .slicesCap(5)
        .innerRadius(0)
        .dimension(dim)
        .group(group)
        .othersGrouper(false);
       

}

function show_tickets_per_day(ndx) {
    var dim = ndx.dimension(dc.pluck("created_at"));
    var group = dim.group();

    dc.lineChart("#tickets-per-day")
        .width(700)
        .height(300)
        .x(d3.scale.linear().domain([1, 31]))
        .xAxisLabel("Date")
        .yAxisLabel("Tickets")
        .brushOn(false)
        .dimension(dim)
        .group(group)
        .xAxis().ticks(30);
        
}

function show_user_satisfaction(ndx) {
    var date_dim = ndx.dimension(dc.pluck("created_at"));
    
    var min_date = date_dim.bottom(1)[0].created_at;
    var max_date = date_dim.top(1)[0].created_at;

    var tickets_date_dim = ndx.dimension(function (d) {
        return [d.created_at, d.satisfaction]
    });

    var tickets_date_group = tickets_date_dim.group();

   

    dc.scatterPlot("#ticket-rating-by-date")
        .width(800)
        .height(600)
        .x(d3.scale.linear().domain([1,31]))
        
        .brushOn(false)
        .xAxisLabel("Day of month")
        .yAxisLabel("Ticket Rating")
        .symbolSize(8)
        .clipPadding(10)
        .dimension(tickets_date_dim)
        .group(tickets_date_group);
}