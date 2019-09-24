module.exports = ({ config }) => {
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    cacheDirectory: true,
                },
            },
        ],
    });

    return config;
};
