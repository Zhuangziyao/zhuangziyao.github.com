/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 15:58:52
 * @version $Id$
 */
var map = new BMap.Map('mymap');
var point=new BMap.Point(120.154461,30.253587);
map.centerAndZoom(point,12);
map.enableScrollWheelZoom();

var local = new BMap.LocalSearch(map, {
  	renderOptions:{
  		map: map,
  		panel:"panel",
    	autoViewport:true}
});
local.searchNearby("宾馆", "西湖");


var transit = new BMap.TransitRoute(map, {
				renderOptions: {
					map: map,
					panel: "result"}
});
local.setMarkersSetCallback(function(pois){
      for(var i=0;i<pois.length;i++){
          pois[i].marker.addEventListener("click", function(e){ 	
          	transit.clearResults();	
          	var mygeo=new BMap.Geocoder();
          	mygeo.getPoint(this.z.title,function(point){
          		if(point){
          			var p=new BMap.Point(point);
    				transit.search('杭州师范大学仓前新校区',point);
          		}
          	},"杭州市")

          })  
      }
})


var markers=[
[120.015177,30.296387,"博文苑8号"],
[120.014288,30.295117,"体育场"],
[120.017441,30.295483,"食堂"]
];
var opts = {
				width : 345, 
				height: 235
			   };

for(var i=0;i<markers.length;i++){
	var point=new BMap.Marker(new BMap.Point(markers[i][0],markers[i][1]));
	var imgaddress="<img style='width:330px;height:154px' src='img/img-"+i+".jpg' />";
	var title="<h4 style='margin:0 0 5px 0;padding:0.2em 0'>"+markers[i][2]+"</h4>";
	var content=imgaddress+title;
	addClick(content,point);
	map.addOverlay(point);
}
function addClick(content,point){
		point.addEventListener("click",function(e){
			var p = e.target;
			var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
			var infoWindow = new BMap.InfoWindow(content,opts);  
			map.openInfoWindow(infoWindow,point);
		});
	}

