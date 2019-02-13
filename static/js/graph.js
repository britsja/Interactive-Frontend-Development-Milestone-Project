// Using page1 from Zendesk export with sanitized json data

queue()
    .defer(d3.json, "static/data/page1.json")
    .await(makeGraphs);

function makeGraphs(error, tickets) {
    
    var ndx = crossfilter(tickets.results);
    show_ticket_type_selector(ndx);
    show_tickets_per_technician(ndx);
    show_tickets_per_facility(ndx);
    show_tickets_per_user_id(ndx);
    
    dc.renderAll();

}

// SHOW TICKET TYPE SELECTOR

function show_ticket_type_selector(ndx) {

    dim = ndx.dimension(dc.pluck('call_type'));
    group = dim.group();

    dc.selectMenu("#ticket-type-selector")
        .dimension(dim)
        .group(group)
        .numberVisible(16);
}

// TICKETS PER TECHNICIAN

function show_tickets_per_technician(ndx) {
    var dim = ndx.dimension(dc.pluck('assignee_id'));
    var group = dim.group();

    dc.barChart("#tickets-technician")
        .width(500)
        .height(350)
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

// TICKETS BY SITE OR FACILITY

function show_tickets_per_facility(ndx) {
    var dim = ndx.dimension(dc.pluck("facility"));
    var group = dim.group();

    dc.pieChart("#tickets-by-facility")
        .width(300)
        .height(300)
        .slicesCap(4)
        .innerRadius(50)
        .dimension(dim)
        .group(group);
}

//TICKETS BY USER ID - TOP5

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