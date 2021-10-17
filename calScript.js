const btns = document.querySelectorAll("button");
const inpt = document.getElementById("text-box");



btns.forEach(element => {
    element.addEventListener("click",(e) => {

         if(element.innerText == "C")
        inpt.value = '';

        else if(element.innerText == "." && !hasLeftSideOp(element.innerHTML))
        inpt.value += sanitizeSymbol(inpt.value);

        else if(element.innerText == "="){
            inpt.value = eval(inpt.value);

        }
        

        else if(!hasLeftSideOp(element.innerText)  && element.innerText != "<--")
            inpt.value += element.innerText;

    
       
      
       
    })
});



function hasLeftSideOp(op){

    const ops =['-','*','/','+','.'];

    return ops.includes(inpt.value[inpt.value.length-1]) && ops.includes(op) ;
}

function hasNoNumber(input){
    return input == null ;
}

function removeNum(input){
    return input.length > 0 ? input.substr(0,input.length-1) : input ;
}

function sanitizeSymbol(input){
    return (!input.includes(".")) && input.length > 0 ? "." : '';
}