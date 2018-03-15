var canvas = document.getElementById("canvas");
var toJ = document.getElementById("Japan");
var toU = document.getElementById("US");

var Japan = [4,5,4];
var US = [9,8,6];

var makecircles = function(){
    var gc = document.createElementNS("http://www.w3.org/2000/svg","circle");
    gc.setAttribute("cx", 150);
    gc.setAttribute("cy", 250);
    gc.setAttribute("r",30);
    gc.setAttribute("fill","gold");
    canvas.appendChild(gc);

    var sc = document.createElementNS("http://www.w3.org/2000/svg","circle");
    sc.setAttribute("cx", 300);
    sc.setAttribute("cy", 250);
    sc.setAttribute("r",30);
    sc.setAttribute("fill","silver");
    canvas.appendChild(sc);

    var bc = document.createElementNS("http://www.w3.org/2000/svg","circle");
    bc.setAttribute("cx", 450);
    bc.setAttribute("cy", 250);
    bc.setAttribute("r",30);
    bc.setAttribute("fill","brown");
    canvas.appendChild(bc);
}

var toJapan = function(){
    canvas.innerHTML = "";
    makecircles();
    var circles = d3.selectAll("circle");
    circles.data(Japan);
    circles.attr("r",function(d){return 9*d;});
}

var toUS = function(){
    canvas.innerHTML = "";
    makecircles();
    var circles = d3.selectAll("circle");
    circles.data(US);
    circles.attr("r",function(d){return 9*d;});
}

toJ.addEventListener("click",toJapan);
toU.addEventListener("click",toUS);
