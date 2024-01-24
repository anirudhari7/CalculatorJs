function buttonClick(val){
    document.getElementById("screen").value+=val
    //document.getElementById("screen").value=document.getElementById("screen").value+val this also can be used

}

function clearDisplay(){
    document.getElementById("screen").value=""
}

function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}