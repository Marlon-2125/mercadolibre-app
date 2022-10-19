const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const meli_backend = [
  ...common,
  'tests/apps/mooc/backend/features/**/*.feature',
  '--require tests/apps/mooc/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  meli_backend
};
