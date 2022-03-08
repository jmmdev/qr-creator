(function(){
    var mainContainer = document.getElementById("main-container");
    var qrContainer = document.getElementById("qr-container");
    var dropdown = document.getElementById("dropdown");

    var dropdownStyle = getComputedStyle(dropdown);

    mainContainer.style.height = window.innerHeight + "px";

    var qrContainerHeight = window.innerHeight - parseFloat(dropdownStyle.height, 10);

    qrContainer.style.height = qrContainerHeight + "px";

    var input = document.getElementById("input-area");
    var preview = document.getElementById("qr-preview");
    var previewBorder = document.getElementById("qr-preview__border");
    var previewHeader = document.getElementById("qr-preview__header");
    var previewFooter = document.getElementById("qr-preview__footer");

    var inputStyle = getComputedStyle(input);
    var previewStyle = getComputedStyle(preview);

    input.style.height = inputStyle.width;
    previewBorder.style.height = previewStyle.width;

    var previewBorderHeight = parseInt(previewBorder.style.height, 10);

    previewHeader.style.height = (previewBorderHeight * 0.1 / 0.8) + "px";
    previewFooter.style.height = (previewBorderHeight * 0.1 / 0.8) + "px";

    var previewTotalHeight = previewBorderHeight + parseInt(previewHeader.style.height,10) * 2;

    var options = document.getElementById("qr-options");
    var buttons = document.getElementById("save-buttons");

    options.style.height = (qrContainerHeight - previewTotalHeight) * 0.75 + "px";
    buttons.style.height = (qrContainerHeight - previewTotalHeight) * 0.25 + "px";
})();

function showOptions(){
    var options = document.getElementById("qr-container");
    var dropdown = document.getElementById("dropdown");
    var showButton = document.getElementById("show-button");

    var optionsStyle = getComputedStyle(options);
    var dropdownStyle = getComputedStyle(dropdown);

    if(optionsStyle.display === "none"){
        options.style.display = "block";
        dropdown.style.boxShadow = "0 1px 0 0 #009c6d";
        showButton.innerHTML = '<i class="bi bi-caret-up-fill">';

        window.scrollBy(0, window.innerHeight - parseFloat(dropdownStyle.height, 10));
    }
    else if (optionsStyle.display === "block"){
        options.style.display = "none";
        dropdown.style.boxShadow = "none";
        showButton.innerHTML = '<i class="bi bi-caret-down-fill">';

        window.scrollBy(0, -window.scrollY);
    }
}

function frameOptions(index){
    var indexes = [0,1,2,3];
    var previewHeader = document.getElementById("qr-preview__header");
    var previewFooter = document.getElementById("qr-preview__footer");

    switch(index){
        case 0:
            previewHeader.style.visibility = "hidden";
            previewFooter.style.visibility = "hidden";
            
        break;
        case 1:
            previewHeader.style.visibility = "visible";
            previewFooter.style.visibility = "hidden";
        break;
        case 2:
            previewHeader.style.visibility = "hidden";
            previewFooter.style.visibility = "visible";
        break;
        case 3:
            previewHeader.style.visibility = "visible";
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

    frameOptions.style.backgroundColor = "#006446";
    qr.setAttribute("fill", "white");

    console.log(div);

    if(div){
        for(let d of div){
            d.style.backgroundColor = "white";
        }    
    }
}

function disableOption(index){
    var frameOptions = document.getElementById("frame-options-" + index);
    var qr = document.getElementById("qr-frame-" + index);
    var div = document.getElementsByClassName("frame-options-" + index + "__div")

    frameOptions.style.backgroundColor = "white";
    qr.setAttribute("fill", "#009c6d");

    console.log(div);

    if(div){
        for(let d of div){
            d.style.backgroundColor = "#009c6d";
        }    
    }
}