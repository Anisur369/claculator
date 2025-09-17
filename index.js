const loanMount = document.getElementById('loanMount');
const loanMount2 = document.getElementById('loanMount2');
const profit = document.getElementById('profit');
const totalProfit = document.getElementById('totalProfit');
function loan() {
  const loanAmount = parseFloat(loanMount.value) || 0;
  const interestRate = parseFloat(loanMount2.value) || 0;
  const calculatedProfit = loanAmount * interestRate / 100;
  profit.innerHTML = calculatedProfit.toFixed(2);
  totalProfit.innerHTML = (loanAmount + calculatedProfit).toFixed(2);
}
loanMount.addEventListener('input', loan);
loanMount2.addEventListener('input', loan);

const sellingInput = document.getElementById('persentProfit');
const costInput = document.getElementById('persentProfit2');
const resultDisplay = document.getElementById('persentProfitTotal');
function calculateProfitPercentage() {
  const sellingPrice = parseFloat(sellingInput.value) || 0;
  const costPrice = parseFloat(costInput.value) || 0;
  if (costPrice === 0) {
    resultDisplay.innerHTML = '0';
    return;
  }
  const profit = sellingPrice - costPrice;
  const percentage = (profit / costPrice) * 100;
  resultDisplay.innerHTML = percentage.toFixed(2);
}
sellingInput.addEventListener('input', calculateProfitPercentage);
costInput.addEventListener('input', calculateProfitPercentage);



const CapitalMoney = document.getElementById('CapitalMoney');
const CapitalMoney2 = document.getElementById('CapitalMoney2');
const CapitalMoneyPercentage = document.getElementById('CapitalMoneyPercentage');
const CapitalMoneyTotal = document.getElementById('CapitalMoneyTotal');
function CapitalMoneyTaka() {
  const loanAmount = parseFloat(CapitalMoney.value) || 0;
  const interestRate = parseFloat(CapitalMoney2.value) || 0;
  const calculatedProfit = interestRate / loanAmount * 100;
  CapitalMoneyPercentage.innerHTML = calculatedProfit.toFixed(2);
  CapitalMoneyTotal.innerHTML = (loanAmount + calculatedProfit).toFixed(2);
}
CapitalMoney.addEventListener('input', CapitalMoneyTaka);
CapitalMoney2.addEventListener('input', CapitalMoneyTaka);