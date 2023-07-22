let input = document.getElementById("input_id");
let buttons = document.querySelectorAll('button');
String ="";
let z="";
let array = Array.from(buttons);
array.forEach((button)=>{
    button.addEventListener('click',(a)=>{
        if(a.target.innerHTML == "="){
            z=String;
            String = eval(String);
            console.log(z);
            input.value=z+"="+String;
            String="";
        }
        else if(a.target.innerHTML == "AC"){
            String="";
            input.value=String;
        }
        else if(a.target.innerHTML == "DEL"){
            String = String.substring(0,String.length-1);
            input.value=String;
        }
        else{
        String = String + a.target.innerHTML;
        input.value = String;
        }
    })
})



