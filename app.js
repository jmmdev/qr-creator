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

function toggleFrame(event){
    var triggered = event.target;
    var triggerParent = triggered.parentElement;
    var frameContainer = document.getElementById("frame-settings");
    var selectors = frameContainer.children;
    var frame = document.getElementById("qr-frame");

    for(let s of selectors){
        if(s === triggered || s === triggerParent){
            if(s.className.includes("disabled")){
                s.className= "selector enabled-selector";
                frame.className = "qr-preview__frame qr-frame-" + s.children[0].id;
            }

            if(s.children[0].id != "none"){
                frame.style.padding = "24px";
            }else{
                frame.style.padding = "29px";
            }
        }else{
            if(s.className.includes("enabled")){
                s.className= "selector disabled-selector";
            }
        }
    }
}

function checkInputValue(){
    var input = document.getElementById("url");
    var generateButton = document.getElementById("generate-button");

    generateButton.disabled = (input.value.length <= 0);
}