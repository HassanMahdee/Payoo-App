document.getElementById("cashout-btn").addEventListener("click", function () {
  const currentBalance = getBalance();
  const agentNumber = getValueFromInput("agent-number");
  if (agentNumber.length !== 11) {
    alert("Invalid Agent Number!");
    return;
  }
  const userPin = getValueFromInput("user-pin");
  if (userPin !== "1234") {
    alert("Invalid PIN!");
    return;
  }
  const cashoutAmount = Number(getValueFromInput("cashout-amount"));
  if (cashoutAmount < 100) {
    alert("Invalid Amount!");
    return;
  }
  const newBalance = currentBalance - (cashoutAmount + 10);
  if (newBalance < 0) {
    alert("Invalid Amount!");
    return;
  } else {
    alert("Cashout Successful!");
    setBalance(newBalance);
  }
});
