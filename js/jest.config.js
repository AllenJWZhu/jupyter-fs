module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  extensionsToTreatAsEsm: [".ts", ".tsx", ".test.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/tests/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|svg)$": "<rootDir>/tests/fileMock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  testRegex: "tests\/.*\.test\.ts[x]?$",  // eslint-disable-line no-useless-escape
  transformIgnorePatterns: ["/node_modules/(?!(@jupyterlab/.*)|(tree-finder)/)"],
};
