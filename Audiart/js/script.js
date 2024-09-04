// Định nghĩa số dư ban đầu cho Ví A và Ví B
let balanceA = 1000;
let balanceB = 500;

// Hàm chuyển tiền
function transfer(from, to) {
  let amount;
  if (from === 'A') {
    amount = parseFloat(document.getElementById('amountA').value);
    if (amount > balanceA) {
      alert('Số tiền trong Ví A không đủ!');
      return;
    }
    balanceA -= amount;
    balanceB += amount;
    document.getElementById('balanceA').textContent = balanceA;
    document.getElementById('balanceB').textContent = balanceB;
  } else if (from === 'B') {
    amount = parseFloat(document.getElementById('amountB').value);
    if (amount > balanceB) {
      alert('Số tiền trong Ví B không đủ!');
      return;
    }
    balanceB -= amount;
    balanceA += amount;
    document.getElementById('balanceA').textContent = balanceA;
    document.getElementById('balanceB').textContent = balanceB;
  }
}
