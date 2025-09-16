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


const profitInput = document.getElementById('persentProfit');
const costInput = document.getElementById('persentProfit2');
const resultDisplay = document.getElementById('persentProfitTotal');

function calculateProfitPercentage() {
  const profitPrice = parseFloat(persentProfit.value) || 0;
  const costPrice = parseFloat(persentProfit2.value) || 0;
  if (costPrice === 0) {
    persentProfitTotal.innerHTML = '0';
    return;
  }
  const sellingPrice = profitPrice - costPrice;  
  const percentage = (sellingPrice / costPrice) * 100
  persentProfitTotal.innerHTML = percentage.toFixed(2);
}


persentProfit.addEventListener('input', calculateProfitPercentage);
persentProfit2.addEventListener('input', calculateProfitPercentage);

