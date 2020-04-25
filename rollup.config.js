import typescript from "rollup-plugin-typescript2"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json"

commonjs({
    exclude: ["node_modules/lodash/**"],
})

export default {
    input: "src/index.ts",
    output: {
        name: "ss-search",
        file: pkg.main,
        format: "cjs",
    },
    plugins: [
        typescript({  }),
        resolve(),
        commonjs({ extensions: [".js", ".ts"] }),
        terser(),
    ],
    external: [...Object.keys(pkg.dependencies || {})],
}
