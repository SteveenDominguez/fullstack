function previewImage() {
    var file = document.getElementById("file").files;
    if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function(event) {
            document.getElementById("preview").setAttribute("src", event.target.result);
            document.getElementById("preview").setAttribute("height", 250);
        };
        fileReader.readAsDataURL(file[0]);

    }
} // JavaScript Document