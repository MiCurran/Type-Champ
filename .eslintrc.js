module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'next',
        'prettier'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': 1,
        'generator-star-spacing': 1,
        'block-spacing': 1,
        'brace-style': ['error', '1tbs'],
        'no-console': 1,
        'comma-spacing': 1,
        'comma-style': 1,
        'computed-property-spacing': 1,
        curly: ['error', 'all'],
        'dot-notation': 1,
        eqeqeq: 1,
        'jsx-quotes': 1,
        'no-unused-vars': 1,
        'key-spacing': 1,
        'keyword-spacing': 1,
        'max-len': ['error', { code: 140, tabWidth: 4 }],
        'no-alert': 1,
        'no-mixed-spaces-and-tabs': 0,
        'no-multi-spaces': 1,
        'no-multiple-empty-lines': ['error', { max: 2 }],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-unneeded-ternary': 1,
        'no-var': 1,
        'object-curly-newline': ['error', { consistent: true }],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'prefer-const': 1,
        'promise/param-names': 0,
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'react/default-props-match-prop-types': [1, { allowRequiredDefaults: true }],
        'react/jsx-curly-spacing': [1, 'never'],
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-bind': 0,
        'react/jsx-uses-react': 1,
        'react/no-access-state-in-setstate': 1,
        'react/no-direct-mutation-state': 1,
        'react/no-string-refs': 1,
        'react/no-typos': 1,
        'react/no-unescaped-entities': 1,
        'react/no-unsafe': 1,
        'react/no-unused-prop-types': 1,
        'react/no-unused-state': 1,
        'react/prop-types': 1,
        'react/require-optimization': 1,
        'react/sort-comp': [1, {
            order: [
                'lifecycle',
                'static-methods',
                'everything-else',
                'render'
            ],
            groups: {
                lifecycle: [
                    'constructor',
                    'childContextTypes',
                    'getChildContext',
                    'componentDidMount',
                    'componentWillMount',
                    'componentDidUpdate',
                    'shouldComponentUpdate',
                    'componentWillUnmount',
                    'contextTypes',
                    'defaultProps',
                    'displayName',
                    'getDefaultProps',
                    'getInitialState',
                    'propTypes',
                    'mixins',
                    'state',
                    'statics'
                ]
            }
        }],
        'react/sort-prop-types': 1,
        semi: ['error', 'always'],
        'semi-spacing': 1,
        'space-before-blocks': 1,
        'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
        'space-in-parens': 1,
        'space-infix-ops': 1,
        'spaced-comment': 1,
        'react/react-in-jsx-scope': 'off'
    },
    globals: {
        React: 'writable'
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: 'detect',
            flowVersion: '0.53'
        },
        propWrapperFunctions: ['forbidExtraProps']
    }
};
