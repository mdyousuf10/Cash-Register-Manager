

const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display="none";
    if(billAmount.value>0){
        if(cashGiven.value>0){
            const amountToBeReturned= cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("No change needs to be returned")
        } 
    }else{
            showMessage("Invalid Bill amount")
        }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
    
}

function showMessage(msg){
    message.style.display="block";
    message.innerText=msg
}