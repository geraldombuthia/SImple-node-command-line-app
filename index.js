module.exports = html5

const fs = require("fs")

function html5() {
    
    const fileName = process.argv[2];
    if (fileName.match(/\.html$/i)) {
        const htmltemplate = fs.readFileSync(`${__dirname}/template/index.html`)
        fs.writeFileSync(`${process.cwd()}/${fileName}`, htmltemplate)
        console.log(`${fileName} has been successfully created`)
    } else {
        fs.writeFileSync(`${process.cwd()}/${fileName}`, "")
        console.log(`${fileName} has been successfully created`)
    }
    
    
}
html5()

module.exports = html5