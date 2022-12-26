const bill = document.getElementById("bill-amount")
const noOfPeople = document.getElementById("people")
const resetBtn = document.getElementById("reset")
const btns = document.getElementsByClassName("tip-btns")
const tip_amount = document.getElementById("tip-amount")
const total = document.getElementById("total-amount")
const custom = document.getElementById("custom")
console.log(btns);


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        if (bill.value > 0 && noOfPeople.value > 0) {
            tip_amount.value = (parseInt(bill.value) * (parseInt(e.target.value)) / 100) / (parseInt(noOfPeople.value))
            total.value = parseInt(bill.value) + parseInt(tip_amount.value)
        }
    })
}

custom.addEventListener("change", (e) => {
    if (bill.value > 0 && noOfPeople.value > 0 && custom.value) {
        tip_amount.value = (parseInt(bill.value) * (parseInt(custom.value)) / 100) / (parseInt(noOfPeople.value))
        total.value = parseInt(bill.value) + parseInt(tip_amount.value)
    }
})

resetBtn.addEventListener("click", () => {
    tip_amount.value = "$0.00"
    total.value = "$0.00"
    bill.value = 0
    noOfPeople.value = 0
    custom.value = 0
})