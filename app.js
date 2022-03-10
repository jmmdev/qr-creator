(function(){
    document.body.style.height = window.innerHeight + "px";

    var mainContainer = document.getElementById("main-container");

    mainContainer.style.height = window.innerHeight + "px";

    var input = document.getElementById("input-area");
    var inputStyle = getComputedStyle(input);
    
    input.style.height = inputStyle.width;
})();

function frameOptions(index){
    var indexes = [0,1];
    var previewFooter = document.getElementById("qr-preview__footer");

    switch(index){
        case 0:
            previewFooter.style.visibility = "hidden";
        break;
        case 1:
            previewFooter.style.visibility = "visible";
        break;
    }

    for(let i of indexes){
        if(i === index){
            enableOption(i);
        }
        else{
            disableOption(i);
        }
    }
}

function enableOption(index){
    var frameOptions = document.getElementById("frame-options-" + index);
    var qr = document.getElementById("qr-frame-" + index);
    var div = document.getElementsByClassName("frame-options-" + index + "__div")

    frameOptions.style.backgroundColor = "white";
    qr.setAttribute("fill", "black");

    if(div){
        for(let d of div){
            d.style.backgroundColor = "black";
        }    
    }
}

function disableOption(index){
    var frameOptions = document.getElementById("frame-options-" + index);
    var qr = document.getElementById("qr-frame-" + index);
    var div = document.getElementsByClassName("frame-options-" + index + "__div")

    frameOptions.style.backgroundColor = "black";
    qr.setAttribute("fill", "white");

    if(div){
        for(let d of div){
            d.style.backgroundColor = "white";
        }    
    }
}

function checkText(){
    var input = document.getElementById("text-entry");
    var submitButton = document.getElementById("submit");

    if(input.value !== ""){
        submitButton.getElementsByTagName("button")[0].disabled = false;
    }else{
        submitButton.getElementsByTagName("button")[0].disabled = true;
    }
}