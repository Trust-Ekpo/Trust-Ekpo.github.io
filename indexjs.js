function myFnc(e){
    e.classList.toggle("show");

    var elem = document.getElementById("navID"),
        style = window.getComputedStyle(elem),
        top = style.getPropertyValue("right");

    if(top == "0px"){
        elem.style.right = "-260px";
    }else{
        elem.style.right = "0px";
    }

}