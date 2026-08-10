import coreWebVitals from "eslint-config-next/core-web-vitals";

// eslint-config-next 16 ships native flat config arrays, so this spreads in
// directly -- no FlatCompat/@eslint/eslintrc shim needed.
//
// This deliberately mirrors the old .eslintrc.json, which extended only
// "next/core-web-vitals". Adding "next/typescript" here is a reasonable future
// step but it lights up several hundred pre-existing findings, so it is left
// out of the dependency upgrade.
const config = [
  {
    ignores: [
      ".claude/**",
      "build/**",
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      "next-env.d.ts",
    ],
  },
  ...coreWebVitals,
];

export default config;
