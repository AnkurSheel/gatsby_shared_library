module.exports = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        'jest-axe/extend-expect',
        '@testing-library/jest-dom/extend-expect',
    ],

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputName: 'TEST-RESULTS.xml',
            },
        ],
    ],
};
