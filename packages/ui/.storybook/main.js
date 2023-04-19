module.exports = {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
        '@storybook/addon-measure',
        '@storybook/addon-storysource',
    ],
    framework: '@storybook/react',
    webpackFinal: async (config, { configType }) => {
        // Resolve error when webpack-ing storybook:
        // Can't import the named export 'Children' from non EcmaScript module (only
        // default export is available)
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });

        return config;
    },
};
