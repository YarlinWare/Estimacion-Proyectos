module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [,
        "/node_modules/",
        "resources/components/index.js",
        "resources/plugins/index.js",
        "resources/init.js"
    ],
}