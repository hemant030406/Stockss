reorient();
function reorient(){
  const nav_bar=document.getElementById("nav");
const nav_bar_height= nav_bar.offsetHeight +"px";

const divider1=document.getElementById("divider_1");
divider1.style.marginTop= nav_bar_height;
nav_bar.style.marginTop="-"+nav_bar_height;
const tab11=document.getElementById("tab1");
const tab11_width= tab11.offsetWidth +"px";
const dropDownList=document.getElementById("dropdown_list");
dropDownList.style.width=tab11_width;
const headingData1_width= (document.getElementById("heading_data_1").offsetWidth+
                           (window.innerWidth * 0.10)
)+"px";
  const headingData1_height=document.getElementById("heading_data_1").offsetHeight+"px";
document.getElementById("line_data_1").style.marginLeft=headingData1_width;
 document.getElementById("line_data_1").style.marginTop="-"+headingData1_height; 
  console.log(headingData1_height);
  
  
  document.getElementById("myChart").style.width=(window.innerWidth-
    document.getElementById("heading_data_1").offsetWidth-(window.innerWidth*0.23)-
    document.getElementById("line_data_1").offsetWidth)+"px";

  document.getElementById("myChart_line").style.width=(window.innerWidth-
    document.getElementById("heading_data_1").offsetWidth-(window.innerWidth*0.30)-
    document.getElementById("line_data_1").offsetWidth)+"px";
}
  

const dropDownButton=document.getElementById("dropdown_button");
dropDownButton.onclick=function() {showList()};

function showList()
{
  var dropDownList=document.getElementById("dropdown_list");
  dropDownList.style.display="block";
  const nse=document.getElementById("NSE");
  nse.style.display="block";
  const bse=document.getElementById("BSE");
  bse.style.display="block";
}
var gg=document.getElementById("overview");
function showfooter(ee){
  gg.style.fontWeight="normal";
  gg.style.color="#999";
  gg.style.border="none";
  ee.style.fontWeight="bold";
  ee.style.color="black";
  ee.style.border="solid";
  console.log(ee.id);
  gg=ee;
}











google.charts.load('current',{packages:['corechart']});

google.charts.setOnLoadCallback(drawChart);
function drawChart() {
// Set Data
var data = google.visualization.arrayToDataTable([
  ['Price', 'Size'],
  [50,7],[60,8],[70,8],[80,9],[90,9],
  [100,9],[110,10],[120,11],
  [130,14],[140,14],[150,15],[152,10],[160,2],[170,3],[180,10],[190,7],[200,5]
]);
// Set Options
var options = {
  legend: 'none',
  hAxis: { textPosition: 'none',gridlines:{color:'transparent'} },
  vAxis: { textPosition: 'none',gridlines:{color:'transparent'} },
  gridlines:'none',
    baselineColor:'transparent',
  colors:['green']
};
// Draw
var chart = new google.visualization.LineChart(document.getElementById('myChart'));
chart.draw(data, options);
}