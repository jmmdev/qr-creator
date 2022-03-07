(function(){
    var mainContainer = document.getElementById("main-container");
    var qrContainer = document.getElementById("qr-container");

    mainContainer.style.height = window.innerHeight + "px";
    qrContainer.style.height = window.innerHeight + "px";

    document.getElementById("output").innerHTML = getComputedStyle(mainContainer).height + ", " + visualViewport.height + "px";

    var input = document.getElementById("input-area");
    var preview = document.getElementById("qr-preview");
    var previewBorder = document.getElementById("qr-preview__border");
    var previewHeader = document.getElementById("qr-preview__header");
    var previewFooter = document.getElementById("qr-preview__footer");

    var inputStyle = getComputedStyle(input);
    var previewStyle = getComputedStyle(preview);

    input.style.height = inputStyle.width;
    previewBorder.style.height = previewStyle.width;

    var previewBorderHeight = parseInt(previewBorder.style.height,10);

    previewHeader.style.height = (previewBorderHeight * 0.1 / 0.8) + "px";
    previewFooter.style.height = (previewBorderHeight * 0.1 / 0.8) + "px";

    var previewTotalHeight = previewBorderHeight + parseInt(previewHeader.style.height,10) * 2;

    var options = document.getElementById("qr-options");
    var buttons = document.getElementById("save-buttons");

    options.style.height = (window.innerHeight - previewTotalHeight) * 0.80 + "px";
    buttons.style.height = (window.innerHeight - previewTotalHeight) * 0.20 + "px";
})();

function showOptions(){
    var options = document.getElementById("qr-container");
    var dropdown = document.getElementById("dropdown");

    var optionsStyle = getComputedStyle(options);
    var dropdownStyle = getComputedStyle(dropdown);

    if(optionsStyle.display === "none"){
        options.style.display = "block";
        dropdown.style.boxShadow = "0 1px 0 0 #009c6d";
    }
    else if (optionsStyle.display === "block"){
        options.style.display = "none";
        dropdown.style.boxShadow = "none";
    }
        window.scrollBy(0, window.innerHeight);
}