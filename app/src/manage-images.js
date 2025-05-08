const save_directory = "storage/img"
const fs = require('node:fs');


function manage(){

    const files = fs.readdirSync(save_directory);
    const image_dropdown = document.getElementById("ImageSelection");
    let newText

    files.forEach((e) => {
        newText += "<option value=" + e + ">Thing</option>";
    });

    document.getElementById("ImageSelection").innerHTML = newText;
}