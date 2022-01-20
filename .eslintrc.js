module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest/globals": true
    },
    "extends": ['airbnb-base', 'eslint:recommended', "plugin:prettier/recommended"],
    "plugins": ['jest', "eslint-plugin-prettier"],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/no-dynamic-require': 0,
        'global-require': 0,
        'import/prefer-default-export': 0,
        'no-underscore-dangle': 0,
        'no-await-in-loop': 0,
        'no-restricted-syntax': 0,
        'no-return-await': 0,
        'no-console': 0,
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 80,
                tabWidth: 2,
                endOfLine: 'lf',
                arrowParens: 'always',
            },
        ],
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "indent": ["error", 2],
        "no-unused-vars": ["error", { "vars": "all", "args": "all", "ignoreRestSiblings": false, "argsIgnorePattern": "^_" }]
    },
}
