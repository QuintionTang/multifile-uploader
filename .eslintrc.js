module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
    },
    env: {
        browser: true,
    },
    extends: ["standard"],
    rules: {
        indent: ["off", 2],
        quotes: [0, "single"],
        "no-mixed-spaces-and-tabs": [2, false], //禁止混用tab和空格
        "generator-star-spacing": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "space-before-function-paren": "off",
        "no-var": "off", //使用let和const代替var
        "no-new-func": "error", //不允许使用new Function
        camelcase: [0, { properties: "never" }],
        "comma-dangle": ["error", "only-multiline"],
        semi: [2, "always"], //语句强制分号结尾
        "prettier/prettier": [
            "off",
            {
                singleQuote: false,
                semi: false,
                trailingComma: "none",
                bracketSpacing: true,
                jsxBracketSameLine: true,
            },
        ],
    },
};
