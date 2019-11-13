module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.jest.json',
            babelConfig: true,
        },
    },
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        'jest-axe/extend-expect',
        '@testing-library/jest-dom/extend-expect',
    ],
    moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputName: 'TEST-RESULTS.xml',
            },
        ],
    ],
    preset: 'ts-jest',
    snapshotResolver: './jest.snapshot-resolver.js',
};
