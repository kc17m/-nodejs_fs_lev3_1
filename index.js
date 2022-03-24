const fs = require("fs")


if (!fs.existsSync("./newFolder/")) {
    fs.mkdir("./newFolder")
}


function add(filecontent) {
    fs.appendFile("./newFolder/text.txt", filecontent + "\n", (err) => {
        if (err) {
            console.log("File needs to be created");
        }
    })
}


add("das ist mein neuer Dateiinhalt")
add("noch mehr Zeilen")
