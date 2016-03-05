## Bundle

    $> browserify index.js -o bundle.js -t [ babelify --presets [ es2015 ] ]
    
## Run tests

    $> ./node_modules/.bin/mocha --compilers js:babel-core/register --harmony
