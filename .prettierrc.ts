module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  importOrder: [
    // Place react import at the top
    '^react$',
    // testing lib
    '^(@testing-library)(/.*|$)',
    // External dependencies
    '^\\w',
    // Every import starting with ./ or ~/
    '^[./|~/|@/]',
  ],
  importOrderSeparation: false,
};
