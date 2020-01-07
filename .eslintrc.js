module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 9,
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/react',
    ],
    plugins: ['babel', 'react', 'jsx-a11y', 'prettier'],
    rules: {
        'prettier/prettier': [
            2,
            {
                trailingComma: 'none',
                printWidth: 100,
                singleQuote: true,
                tabWidth: 4,
                endOfLine: 'auto'
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/static-property-placement': 0,
        'react/no-array-index-key': 'off',
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 'off'
    }
};
