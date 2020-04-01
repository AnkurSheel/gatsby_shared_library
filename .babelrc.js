module.exports = {
    env: {
        esmodules: {
            presets: [
                // Handle React but no polyfills
                ['@babel/react', { useBuiltIns: true }],
                '@babel/typescript',
            ],
            plugins: ['@babel/proposal-class-properties'],
            ignore: [
                '**/*.stories.tsx',
                '**/__tests__', // ignore all test directories leave this up to ts-jest
                '**/*.spec.tsx',
            ],
        },
        storybook: {
            presets: [['@babel/env', { useBuiltIns: 'usage', corejs: 3 }], '@babel/react', '@babel/typescript'],
            plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
            sourceMaps: 'inline',
            ignore: [
                '**/__tests__', // ignore all test directories leave this up to ts-jest
                '**/*.spec.tsx',
            ],
        },
        test: {
            presets: [['@babel/env', { modules: 'commonjs' }], '@babel/react', '@babel/typescript'],
            plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread',
                '@babel/plugin-transform-runtime',
            ],
            sourceMaps: 'inline',
            ignore: ['**/*.stories.tsx'],
        },
    },
    ignore: ['**/node_modules'],
};
