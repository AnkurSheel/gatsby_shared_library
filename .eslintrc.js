module.exports = {
    extends: ['@codinators/eslint-config', 'plugin:jest/recommended'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/*.stories.tsx', '**/__tests__/**/*.[jt]s?(x)'] },
        ],
    },
};
