#!/usr/bin/node

import fs from 'node:fs';

const images_location = "/src/storage/image/images.json";

function WriteText(value){
    
    // const select = document.getElementById("ImageSelection");
    // const current = select.innerHTML;

    const current = ReadText();
    const new_text = current + "<option value="+value+">"+value+"</option>";


    fs.writeFile(images_location, new_text, (err) => {
        // In case of a error throw err.
        if (err) throw err;  
        else console.log("Written");
    })
    
    const inner = ReadText();
    
    if(inner !== "f"){
        select.innerHTML = ReadText();
    }

    else{
        console.log("Failed to set the text");
    }
}

function ReadText(){
    fs.readFile(images_location, "utf8", (err, data) => {
        // In case of a error throw err.
        if (err) throw err;
        else return data;
    });
    return "f";
}


function GetText(){
    const input = document.getElementById("image-input");
    const value = input.value;

    WriteText(value);
}

// const button = document.getElementById("add-button");

// button?.addEventListener("click", () => {
//     console.log("Button pressed");
//     GetText();
// });