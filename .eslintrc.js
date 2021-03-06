module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: 'standard',
  'rules': {
    'arrow-parens': 0,
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'space-before-function-paren': ['error', {
      'anonymous': 'ignore',
      'named': 'ignore',
      'asyncArrow': 'ignore'
    }]
  }
}
