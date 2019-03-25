const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({ browsers: ['ie >= 11', 'last 10 version'] }),
    ],
    sourceMap: true
};