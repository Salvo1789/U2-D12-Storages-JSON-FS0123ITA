var counter = null;
var counters = null;


if(sessionStorage.getItem("counter") == null){
  counter=sessionStorage.setItem("count", 1);
  counters = 1;
}else{
  counters++;
  counter=sessionStorage.setItem("count", counters);
}

