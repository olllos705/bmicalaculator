const formbtn=document.getElementById("button");
const sister= document.getElementById("sister");
const result = document.getElementById("result")

formbtn.addEventListener("click", () =>{
const height= parseInt(document.getElementById("height").value);
const weight= parseInt(document.getElementById("weight").value);
const result = document.getElementById("result");
const sister = document.getElementById("sister");
let height_status=false, weight_status=false;

if(height === "" || isNaN(height)|| (height <= 0)){
    document.getElementById("height-error").innerHTML ="please provide a valid height"
}else{
    document.getElementById("height-error").innerHTML = "";
    height_status =true;
}





if(weight === "" || isNaN(weight)|| (weight <= 0)){
    document.getElementById("weight-error").innerHTML ="please provide a valid weight"
}else{
    document.getElementById("weight-error").innerHTML = "";
    weight_status =true;
}

if(height_status && weight_status){
    const bmi =(weight/((height*height)/1000)).toFixed(2)
                        
   
    if(bmi <= 18.6){
       
     result.innerHTML = bmi + "Underweight 😔  " 
     sister.innerHTML ="weak";
    }else if (bmi >=25){
        
        result.innerHTML = bmi + "normal 😔  " ;
    }
    else if(bmi >= 30){
       
        result.innerHTML = bmi + "overweight 😔  " ;
    }
    else{
        "the value you entered is incorrect, please try again later"}
        result.innerHTML="";  
    }
});
