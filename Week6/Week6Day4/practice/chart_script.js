// import  chart from  "./script.js";

// localStorage.clear()


(function getChartList(){
    const getChartData = JSON.parse(localStorage.getItem('allproduct'));
    console.log(getChartData);
for(item of getChartData){
    console.log(item[0]);
}
//     console.log(typeof getChartData);

})()