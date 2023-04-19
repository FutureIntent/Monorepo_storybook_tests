module.exports = {
    root: true,
    extends: ['next', 'custom'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
        },
    },
};
