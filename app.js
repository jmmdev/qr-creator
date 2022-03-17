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
    var frames = ["none", "normal", "dash", "dots"];
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

function toggleFrame(event){
    var triggered = event.target;
    var triggerParent = triggered.parentElement;
    var frameContainer = document.getElementById("frame-settings");
    var selectors = frameContainer.children;
    var preview = document.getElementById("qr-preview");
    var frame = document.getElementById("qr-frame");
    var logo = document.getElementById("qr-logo");

    for(let s of selectors){
        if(s === triggered || s === triggerParent){
            if(s.className.includes("disabled")){
                s.className= "selector enabled-selector";
                frame.className = "qr-preview__frame qr-frame-" + s.children[0].id;
            }

            if(s.children[0].id.includes("round")){
                preview.style.borderRadius = "20px";
            }else{
                preview.style.borderRadius = "";
            }

            if(s.children[0].id != "none"){
                frame.style.padding = "calc(10% - 10px)";
                logo.style.width = "calc(25% + 5px)";
                logo.style.height = "calc(25% + 5px)";
            }else{
                frame.style.padding = "10%";
                logo.style.width = "25%";
                logo.style.height = "25%";
            }
        }else{
            if(s.className.includes("enabled")){
                s.className = "selector disabled-selector";
            }
        }
    }
}

function downloadQR(){
    domtoimage.toPng(document.getElementById("qr-preview"))
        .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = "tu-codigo-qr.png";
        link.href = dataUrl;
        link.click();
    });
}