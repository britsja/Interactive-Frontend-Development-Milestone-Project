// Using page1 from Zendesk export with sanitized json data

queue()
    .defer(d3.json, "static/data/page1.json")
    .await(makeGraphs);

function makeGraphs(error, tickets) {
    
    var ndx = crossfilter(tickets.results);
    show_ticket_type_selector(ndx);
    
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