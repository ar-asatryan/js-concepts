let count = 0;

function testLog() {
  count++;
  return true;
}

testLog();
testLog();
testLog();
testLog();
testLog();

console.log(count);
