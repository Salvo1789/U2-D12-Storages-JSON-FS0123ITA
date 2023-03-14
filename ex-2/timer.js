var counter = null;
var counters = null;

do{
if(sessionStorage.getItem("counter") == null){
  counter=sessionStorage.setItem("count", 1);
  counters = 1;
}else{
  //counters= parseInt(sessionStorage.getItem("count")); 
  counters++;
  counter=sessionStorage.setItem("count", counters);
}
}while(counters>1)
