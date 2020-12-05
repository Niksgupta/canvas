
import { saveAs } from 'file-saver';


function screenshot(){
    var canvas = document.getElementById("my-canvas");
    canvas.toBlob(function(blob) {
        saveAs(blob, "canvas.pdf");
    });
}

export default screenshot;