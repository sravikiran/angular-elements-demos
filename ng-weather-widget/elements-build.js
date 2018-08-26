const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/ng-weather-widget/runtime.js',
        './dist/ng-weather-widget/polyfills.js',
        './dist/ng-weather-widget/main.js'
    ]

    await fs.ensureDir('elements')
    await concat(files, 'elements/weather-widget.js')
    await fs.copyFile('./dist/ng-weather-widget/styles.css', 'elements/styles.css')

})()