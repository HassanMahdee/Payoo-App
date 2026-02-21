function getValueFromInput(id) {
  const input = document.getElementById(id).value;
  return input;
}
function getBalance() {
  const balance = document.getElementById("current-balance").innerText;
  return Number(balance);
}
function setBalance(number) {
  document.getElementById("current-balance").innerText = number;
}
