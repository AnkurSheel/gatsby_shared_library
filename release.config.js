module.exports = {
    branch: 'master',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'CHANGELOG.md'],
                message: 'chore(New Release): Version ${nextRelease.version} \n\n${nextRelease.notes} [skip ci]', // eslint-disable-line no-template-curly-in-string
            },
        ],
    ],
};
