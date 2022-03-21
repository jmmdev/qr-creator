(function(){
    listFrames();

    let qrPreview = document.getElementById("qr-preview");
    qrPreview.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
    });
})();

function showSettings(event){
    var field = event.target;

    if(field.tagName === "I"){
        field = field.parentElement;
    }

    var content = field.nextElementSibling;

    if(content.className.includes("disabled")){
        field.className = "settings-field enabled-field";
        content.className = content.id + " settings-content enabled-settings";
        field.children[1].className = "bi bi-dash show-icon";
    }
    else{
        field.className = "settings-field disabled-field";
        content.className = "settings-content disabled-settings";
        field.children[1].className = "bi bi-plus show-icon";
    }
}

function listFrames(){
    var frames = ["none", "normal", "dash"];
    var frameContainer = document.getElementById("frame-settings");

    var html = "";
    var output = "";

    for(let f of frames){
        
        if(f === "none"){
            output = '<div class="selector enabled-selector" onclick=toggleFrame(event)>'+
                    '<div id="'+ f +'" class="frame-selector-content ' + f + '"></div>'+
                '</div>';
            html += output;
        }else{
            output = '<div class="selector disabled-selector" onclick=toggleFrame(event)>'+
                        '<div id="'+ f +'" class="frame-selector-content ' + f + '"></div>'+
                    '</div>';
            html += output;  
            output = '<div class="selector disabled-selector" onclick=toggleFrame(event)>'+
                    '<div id="'+ f +'-round" class="frame-selector-content ' + f + ' round"></div>'+
                '</div>';
            html += output; 
        }
    }

    frameContainer.innerHTML = html;
}

function checkInputValue(){
    var input = document.getElementById("url");
    var generateButton = document.getElementById("generate-button");

    generateButton.disabled = (input.value.length <= 0);
}

function showColorpicker(event){
    var colorSettings = event.target;
    var id = colorSettings.id;

    while(!id.includes("wraper")){
        colorSettings = colorSettings.parentElement;
        id = colorSettings.id;
    }
    
    var colorPicker = colorSettings.nextElementSibling;

    if(colorPicker.className.includes("hide")){
        colorPicker.className = "colorpicker-container show-colorpicker";
    }else{
        colorPicker.className = "colorpicker-container hide-colorpicker";
    }
}

function downloadQR(){

    html2canvas(document.querySelector("#qr-frame"), {backgroundColor: null, scale: 4}).then(canvas => {
        var link = document.createElement('a');
        link.download = "tu-codigo-qr.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

function enableSettings(enable){
    var settings = document.getElementById("settings-container").children;

    if(enable){
        for(s of settings){
            s.style.pointerEvents = "";
            s.style.opacity = "100%";
        }
    }else{
        for(s of settings){
            s.style.pointerEvents = "none";
            s.style.opacity = "50%";
        }
    }
}