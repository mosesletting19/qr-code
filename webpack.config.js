const path = require('path');

module.exports = {
    // Other Webpack configurations
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "crypto": require.resolve("crypto-browserify")
        }
    }
};
