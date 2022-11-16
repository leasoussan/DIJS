// import  chart from  "./script.js";

// localStorage.clear()


(function getChartList(){
    const getChartData = localStorage.getItem('allproduct');
    console.log(getChartData);
for(item in getChartData){
    console.log(item[0]);
}
//     console.log(typeof getChartData);

})()