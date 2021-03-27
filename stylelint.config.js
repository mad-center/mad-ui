// about more config rules, check https://stylelint.io/user-guide/configure
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export'],
      },
    ],
  },
}
