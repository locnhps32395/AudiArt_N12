// wallet.js

function getBalance(walletId) {
    return parseInt(document.getElementById(`balance${walletId === 'wallet1' ? 1 : 2}`).textContent, 10);
}

function updateBalance(walletId, newBalance) {
    document.getElementById(`balance${walletId === 'wallet1' ? 1 : 2}`).textContent = newBalance;
}

function deposit(walletId) {
    const amount = parseInt(prompt('Nhập số tiền cần nạp:'), 10);
    if (amount > 0) {
        const currentBalance = getBalance(walletId);
        updateBalance(walletId, currentBalance + amount);
        alert(`Nạp thành công ${amount}. Số dư hiện tại: ${currentBalance + amount}`);
    } else {
        alert('Số tiền nạp phải lớn hơn 0');
    }
}

function withdraw(walletId) {
    const amount = parseInt(prompt('Nhập số tiền cần rút:'), 10);
    const currentBalance = getBalance(walletId);
    if (amount > 0 && amount <= currentBalance) {
        updateBalance(walletId, currentBalance - amount);
        alert(`Rút thành công ${amount}. Số dư hiện tại: ${currentBalance - amount}`);
    } else {
        alert('Số tiền rút không hợp lệ hoặc không đủ số dư');
    }
}

function transfer(fromWalletId, toWalletId) {
    const amount = parseInt(prompt('Nhập số tiền cần chuyển:'), 10);
    const fromBalance = getBalance(fromWalletId);
    if (amount > 0 && amount <= fromBalance) {
        updateBalance(fromWalletId, fromBalance - amount);
        const toBalance = getBalance(toWalletId);
        updateBalance(toWalletId, toBalance + amount);
        alert(`Chuyển thành công ${amount} từ ${fromWalletId === 'wallet1' ? 'Ví A' : 'Ví B'} đến ${toWalletId === 'wallet1' ? 'Ví A' : 'Ví B'}.`);
    } else {
        alert('Số tiền chuyển không hợp lệ hoặc không đủ số dư');
    }
}
