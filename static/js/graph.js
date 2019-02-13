// Using page1 from Zendesk export with sanitized json data

queue()
    .defer(d3.json, "static/data/page1.json")
    .await(makeGraphs);

function makeGraphs(error, tickets) {
    
    var ndx = crossfilter(tickets.results);
    show_ticket_type_selector(ndx);
    show_tickets_per_technician(ndx);
    
    dc.renderAll();

}

// SHOW TICKET TYPE SELECTOR

function show_ticket_type_selector(ndx) {

    dim = ndx.dimension(dc.pluck('call_type'));
    group = dim.group();

    dc.selectMenu("#ticket-type-selector")
        .dimension(dim)
        .group(group)
        .numberVisible(17);
}

// TICKETS PER TECHNICIAN

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