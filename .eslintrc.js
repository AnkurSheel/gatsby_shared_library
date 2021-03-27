module.exports = {
    extends: ['@codinators/eslint-config', 'plugin:jest/recommended', 'plugin:react-hooks/recommended'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/*.stories.tsx', '**/__tests__/**/*.[jt]s?(x)'] },
        ],
    },
};
