// Dom 
const totalBalance = document.querySelector('.total-balance');
const incomeAmount = document.querySelector('.income-amount');
const expenseAmount = document.querySelector(".expense-amount");
const transaxctionList = document.querySelector(".transaction-list");
const form = document.querySelector(".transaction-form");
const desacriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");


const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Update local storage
function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

form.addEventListener("submit", addTransaction);

function addTransaction(e) {
    e.preventDefault();
    if(desacriptionInput.value.trim() === "" || amountInput.value.trim() === "") {
        alert("Please enter a description and amount");
        return;
    }

    const description = desacriptionInput.value;
    const amount = parseFloat(amountInput.value);

    const transaction = {
        id: Date.now(),
        description,
        amount
    }
    transaction.push(transaction);
    updateLocalStorage();
}