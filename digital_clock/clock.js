let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
let time=new Date();
hrs.textContent = time.getHours();
min.textContent = time.getMinutes();
sec.textContent = time.getSeconds();
},1000);