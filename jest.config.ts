import type { Config } from "@jest/types";
import { defaults } from "jest-config";

// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
    };
};

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: false,
    moduleNameMapper: {
        "@src/(.*)": "<rootDir>/src/$1",
    },
    coverageDirectory: "coverage",
    collectCoverageFrom: ["src/**/*.ts", "!**/node_modules/**"],
    coverageReporters: ["html", "text", "text-summary", "cobertura"],
    testMatch: ["**/*.test.ts"],
    clearMocks: true,
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};
