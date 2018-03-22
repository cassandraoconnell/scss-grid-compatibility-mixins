const fs = require('fs');
const sass = require('node-sass')

sass.render({
    file: './src/css/style.scss',
    indentWidth: 4,
}, (error, result) => {
    if (error) {
        console.log('ERROR:')
        console.log(error.message)
    } else {
        fs.writeFile('./src/css/style.css', result.css.toString(), (error) => {
            if (error) {
                throw new Error ('Error writing compiled CSS to file.')
            }
        });
        console.log("CSS compiled.")
    }
})