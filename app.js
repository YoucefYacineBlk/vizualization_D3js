var width = 500;
var height = 300;
var color = d3.scale.linear()
.range(["steelblue", "brown"])
.interpolate(d3.interpolateHcl)
.domain([0, 200]);
var svg = d3.select("#chart")
.append('svg')
.attr('width', width )
.attr('height', height)
.style('background-color', color(0));
var cercle = svg.append('circle')
.attr("r",20)
.attr("cx",(Math.random()*250 + 20)).attr("cy",(Math.random()*250 + 20));

var line= svg.append('line')
.attr('x1',20)
.attr('y1',20)
.attr('x2',40 )
.attr('y2', 40)
.attr('stroke','black' );
var rect= svg.append('rect')
.attr('x',200)
.attr('y',200)
.attr('width', 20 )
.attr('height', 20 )
// ..........................................
var text= svg.append("text")
.style("fill", "black")
.attr('x',20 )
.attr('y',20)
.attr('width',20)
.attr('height',20 )
.attr('text-anchor','middle' )
.text('Youcef');
function actionMO (event){
     
// .style('fill', color(90))
// .transition()
// .style('fill', 'darkolivergreen');
}
document.querySelector('circle').addEventListener("mouseover",function (e) {
    svg.selectAll('circle').style('fill', color(90))
    .transition()
    .style('fill', 'darkolivergreen');  
});
document.querySelector('line').addEventListener("mouseover",function (e) {
    svg.selectAll('line').style('stroke', color(90))
    .transition()
    .style('stroke', 'darkolivergreen');  
});
document.querySelector('rect').addEventListener("mouseover",function (e) {
    svg.selectAll('rect').style('fill', color(90))
    .transition()
    .style('fill', 'darkolivergreen');  
});
document.querySelector('circle').addEventListener("mouseout",function (e) {
    svg.selectAll('circle').style('fill', color(90))
    .transition()
    .style('fill', 'black');  
});
document.querySelector('line').addEventListener("mouseout",function (e) {
    svg.selectAll('line').style('stroke', color(90))
    .transition()
    .style('stroke', 'black');  
});
document.querySelector('rect').addEventListener("mouseout",function (e) {
    svg.selectAll('rect').style('fill', color(90))
    .transition()
    .style('fill', 'black');  
});


function removeTransitions(){

d3.select("line").transition().attr("d", "M0,0 l50,13 l-25,25 Z").attr("transform", "translate(0, 0)").style("stroke", "black")
.attr('stroke-width',1 ).duration(1000);

d3.select("rect").transition().attr("d", "M0,0 l50,13 l-25,25 Z").attr("transform", "translate(0, 0)").attr('width',20 ).attr('height',20    ).style("fill", "black").duration(1000);
d3.select("circle").transition().attr("d", "M0,0 l50,13 l-25,25 Z").attr("transform", "translate(0, 0)").attr("r", 20).style("fill", "black").duration(1000);
}
function runTransitions(){

var moveCheckboxSelected = d3.select("#move").property("checked");
var sizeCheckboxSelected = d3.select("#size").property("checked");
var colorCheckboxSelected = d3.select("#color").property("checked");
if(!moveCheckboxSelected && !sizeCheckboxSelected && !colorCheckboxSelected){

return;
}
var valeur_transition=document.getElementById("Anglevar").value;
var lineTransition = d3.select("line").transition();
var rectTransition = d3.select("rect").transition();
var circleTransition = d3.select("circle").transition();


if(moveCheckboxSelected){
lineTransition.attr("transform", "translate(250, 50)").duration(1000);
circleTransition.attr("transform", "translate(250, 50)").duration(1000);
rectTransition.attr("transform", "translate(250, 50)").duration(1000);
}

if(sizeCheckboxSelected){

lineTransition.attr("stroke-width", 10).duration(1000);
circleTransition.attr("r", 40).duration(1000);
rectTransition.attr("height", 40).duration(1000)
.attr('width',40 ).attr('height',40 ).duration(1000);

//...... }
}
if(colorCheckboxSelected){
lineTransition.style("stroke", "red").duration(1000);
rectTransition.style("fill", "blue").duration(1000);
circleTransition.style("fill", "green").duration(1000);
}
}
////////////////////
console.log("d3.select(circle)",d3.select("circle"));
console.log("d3.select(#Anglevar)",d3.select("#Anglevar"));
// when the input range changes update the angle
$(document).on('input change', '#Anglevar', function() {
$('#nAngle-value').html( $(this).val() );
update($(this).val());
});
update(0);
//////////
function update(nAngle) {
// rotate the text
svg.select("text")
.attr("transform", "translate(400,200) rotate("+nAngle+")");
}
