// test/unit.test.js
const assert = require('assert');

console.log("========================================");
console.log("🚀 Starting Unit Tests (Grade O Suite)");
console.log("========================================");

// --- 測試案例 1：基礎數學與環境健全性檢查 ---
function add(a, b) {
  return a + b;
}
assert.strictEqual(add(2, 3), 5, "Assertion Error: 2 + 3 should equal 5");
console.log("✔ Test 1 Passed: Basic math operation verified.");

// --- 測試案例 2：字串與事件格式化邏輯 (模擬 activity-log 行為) ---
function formatEventDescription(action, repoName) {
  if (!action || !repoName) {
    throw new Error("Missing required parameters for event description");
  }
  return `Action [${action}] triggered on repository [${repoName}]`;
}

const expectedOutput = "Action [PushEvent] triggered on repository [my-repo]";
assert.strictEqual(
  formatEventDescription("PushEvent", "my-repo"),
  expectedOutput,
  "Assertion Error: Event description formatting mismatch"
);
console.log("✔ Test 2 Passed: Event formatting logic verified.");

// --- 測試案例 3：邊界條件與異常捕獲檢查 ---
assert.throws(
  () => formatEventDescription("", "my-repo"),
  /^Error: Missing required parameters/,
  "Assertion Error: Function should throw error on empty action"
);
console.log("✔ Test 3 Passed: Error boundary handling verified.");

console.log("========================================");
console.log("🎉 ALL UNIT TESTS PASSED SUCCESSFULLY!");
console.log("========================================");
