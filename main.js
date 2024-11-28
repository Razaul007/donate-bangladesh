const donateBtns = document.querySelectorAll('.donate-btn');
// console.log(donateBtns);
// for (const element of donateBtns) {
//     console.log(element);
// }

const updateNavbarBalance = (amountBalance)=>{
  const navbarBalance =parseFloat(document.getElementById("balance").innerText);
 
  const remainingBalance = navbarBalance - amountBalance;
  document.getElementById("balance").innerText = remainingBalance.toFixed(2);
  
};

const addToDonationHistory = (amountBalance, cardTitle) =>{
   const historyContainer= document.getElementById("history-container");

   const historyEntry = document.createElement("div");
   historyEntry.classList.add("border", "p-4", "rounded-lg", "shadow-sm");
   historyEntry.innerHTML =`
     <h3 class="font-semibold">Title: ${cardTitle}</h3>
     <p>Donation Amount: ${amountBalance}</p>
     <p>${new Date().toLocaleString()}</p>
     `
   historyContainer.appendChild(historyEntry);
}




const handleDonate = (button)=>{
   const cardElement = button.closest(".card");
   const amountBalance= parseFloat(cardElement.querySelector(".input").value);
   const navbarBalance =parseFloat(document.getElementById("balance").innerText);
   
   if(isNaN(amountBalance)|| amountBalance<=0||navbarBalance<amountBalance){
    alert("Please input valid amount!")
   }
  updateNavbarBalance(amountBalance);

  const cardBalance = parseFloat(cardElement.querySelector(".card-balance").innerText);
  console.log(cardBalance);
  const newCardBalance = cardBalance + amountBalance;
 cardElement.querySelector(".card-balance").innerText = newCardBalance.toFixed(2);

 const cardTitle = cardElement.querySelector(".card-title").innerText;
 addToDonationHistory(amountBalance, cardTitle);

  cardElement.querySelector(".input").value="";
  document.getElementById("show-modal-btn").showModal();
}


donateBtns.forEach((btn)=>{
   btn.addEventListener('click', (e)=>{
    // console.log(e.target);
    handleDonate(e.target);
   })
})