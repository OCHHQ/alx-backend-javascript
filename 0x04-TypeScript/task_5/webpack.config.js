// task_4/webpack.config.js

const path = require('path');

module.exports = {
    mode: 'development', // or 'production'
    entry: './js/main.ts', // This is the entry point
    output: {
        filename: 'bundle.js', // The output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    resolve: {
        extensions: ['.ts', '.js'], // Allow importing TypeScript and JavaScript files
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // Target TypeScript files
                use: 'ts-loader', // Use ts-loader for TypeScript files
                exclude: /node_modules/,
            },
        ],
    },
};
