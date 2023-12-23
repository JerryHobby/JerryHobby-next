const path = require("path");
module.exports = {
    entry: "/hello-wasm/pkg/hello_wasm.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "hello_wasm.js",
    },
    mode: "development",
    experiments: {
        asyncWebAssembly: true
    },
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: "webassembly/async"
            }
        ]
    }
};
