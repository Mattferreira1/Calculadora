const currentnumber = document.getElementById("current-number")
const previousnumber = document.getElementById("previous-number")

let operation = ""
let result = ""
let prevnbm =""
let strresult =""

function updatecurrentnumber(){
    document.getElementById("current-number").textContent = operation;
}

function updatepreviousnumber(){
    document.getElementById("previous-number").textContent = prevnbm;
}

function clearvar(){
    operation = ""
    result = ""
    prevnbm = ""
    strresult = ""
    updatepreviousnumber()
    updatecurrentnumber()
}

function calculator(value){
    let stringvalue = String(value);

    if(value>=0 && value<10 || value=="."){
        operation = operation + stringvalue;
        updatecurrentnumber()
    }
    else if(value=="+" || value=="-" || value=="/" || value=="*"){
        operation = operation + stringvalue;
        prevnbm = prevnbm + operation
        updatepreviousnumber()
        operation=""
        updatecurrentnumber()
    } 
    else if(value="="){

        if(prevnbm==""|| operation==""){
            return
        } 
        else{
            prevnbm = prevnbm + operation
            document.getElementById("previous-number").textContent = prevnbm.concat("=");
            operation=""
            result = prevnbm + operation
            strresult = eval(String(result))
            
            document.getElementById("current-number").textContent = strresult;
            prevnbm  = strresult
        }
        
    }
}


  