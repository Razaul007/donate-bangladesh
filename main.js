const donateBtns = document.querySelectorAll('.donate-btn');
// console.log(donateBtns);
// for (const element of donateBtns) {
//     console.log(element);
// }

const updateNavbarBalance = (amountBalance)=>{
  const navbarBalance =parseFloat(document.getElementById("balance").innerText);
 
  const remainingBalance = navbarBalance - amountBalance;
  document.getElementById("balance").innerText = remainingBalance.toFixed(2);
  
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
  cardElement.querySelector(".input").value="";
}


donateBtns.forEach((btn)=>{
   btn.addEventListener('click', (e)=>{
    // console.log(e.target);
    handleDonate(e.target);
   })
})