import {
  defineConfig
} from "vitest/config";

export default defineConfig({
  test: {
    passWithNoTests: true,
    include: [
      "packages/shared/**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "packages/core/**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "apps/cli/**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "apps/gui/**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "sdk/**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "plugins/**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "test-utils/**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "scripts/**/*.{test,spec}.?(c|m)[jt]s?(x)"
    ]
  }
});
