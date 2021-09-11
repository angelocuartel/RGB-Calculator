const btns = document.querySelectorAll("button");
const inpt = document.getElementById("text-box");



btns.forEach(element => {
    element.addEventListener("click",function(e){
         if(element.innerText == "C")
        inpt.value = '';
        else if(element.innerText != "<")
       inpt.value += element.innerText;
      
       else
       inpt.value = removeNum(inpt.value);
       
    })
});




function removeNum(input){
    return input.length > 0 ? input.substr(0,input.length-1) : input ;
}