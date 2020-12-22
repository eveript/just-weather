module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        // 'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    env: {
        es6: true,
        node: true,
    },
    plugins: [
        // 'react', 'react-hooks',
        'prettier',
        '@typescript-eslint',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    parser: '@typescript-eslint/parser',
    // parserOptions: {
    //     project: './tsconfig.json',
    //     sourceType: 'module',
    //     ecmaFeatures: {
    //         jsx: true,
    //     },
    // },
}
