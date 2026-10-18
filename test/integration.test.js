// test/integration.test.js
const assert = require('assert');

console.log("========================================");
console.log("🔗 Starting Integration Tests (Grade E/O)");
console.log("========================================");

// 讀取環境變數 TEST_ENV
const currentEnv = process.env.TEST_ENV;
console.log(`Current Test Environment detected: ${currentEnv}`);

// --- 測試案例 1：驗證是否正確注入環境變數 ---
assert.ok(currentEnv, "Assertion Error: TEST_ENV environment variable must not be empty");
console.log("✔ Integration Test 1 Passed: TEST_ENV is defined.");

// --- 測試案例 2：驗證環境必須為 staging 或 prod ---
assert.match(
  currentEnv,
  /^(staging|prod)$/,
  "Assertion Error: TEST_ENV must be either 'staging' or 'prod'"
);
console.log(`✔ Integration Test 2 Passed: Valid target environment [${currentEnv}].`);

console.log("========================================");
console.log("🎉 ALL INTEGRATION TESTS PASSED!");
console.log("========================================");
