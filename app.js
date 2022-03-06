(function(){
    var input = document.getElementById("input-area");
    var preview = document.getElementById("qr-preview");
    var previewBorder = document.getElementById("qr-preview__border");

    var inputStyle = getComputedStyle(input);
    var previewStyle = getComputedStyle(preview);

    input.style.height = inputStyle.width;
    previewBorder.style.height = previewStyle.width;
})();