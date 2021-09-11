const btns = document.querySelectorAll("button");
const inpt = document.getElementById("text-box");



btns.forEach(element => {
    element.addEventListener("click",function(e){
        if(element.innerText != "<")
       inpt.value += element.innerText;
       else
       inpt.value = removeNum(inpt.value);
       
    })
});


function removeNum(number){
    return number.length > 0 ? number.substr(0,number.length-1) : number ;
}