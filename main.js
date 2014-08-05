// "http://data.cdc.gov/resource/t984-9cdv.json"

d3.json("http://data.cdc.gov/resource/t984-9cdv.json?year=1995", function(error, data) {
  if(error){ alert('womp'); }

  var height = 200;

  var yScale = d3.scale.linear()
      .domain([0, d3.max(data, function(d){ return d.yes; })])
      .range([0, height]);

  d3.select('#project')
    .selectAll('rect')
      .data(data)
    .enter().append('rect')
      .attr('fill', 'green')
      .attr('width', 20)
      .attr('height', function(data) { return yScale(data.yes); })
      .attr('x', function(data, index) { return index * 50; })
      .attr('y', function(data) { return height - yScale(data.yes); });
});

//d3.select('#project').append('text').attr('y', 20).text('It works!');

