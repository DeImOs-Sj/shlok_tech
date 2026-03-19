module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    // Unused variables/imports fail the build instead of just warning
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    // Disabled: react-three-fiber uses custom JSX elements (mesh, bufferGeometry, etc.)
    // that this rule doesn't understand — it produces false positives for all R3F/Three.js props
    'react/no-unknown-property': 'off',
    // Enforce hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
