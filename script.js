const form = document.querySelector('#p-Form');
const em = document.querySelector(".inner");
const submitBtn = document.querySelector("#button")



function validateForm(event){
  
    const emailInput = document.querySelector("#email")
    const emailValue = emailInput.value.trim()
  
    console.log(emailValue)


    
  if (emailValue === '') {
    em.innerHTML= "Whoops! It looks like you forgot to add your email";
    emailInput.focus();
    return false;
  }
  else if(emailValue !== ''){
    em.innerHTML = " "
    return true
  }
  
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(emailValue)) {
        em.innerHTML = "Please provide a valid email address";
        emailInput.focus();
        return false;
      }
  
}



form.addEventListener("submit", (e) =>{
  e.preventDefault()
  validateForm()
})
;


//
 


      


    
//   }
// 
//   form.submit();
// }




// form.addEventListener('submit', validateForm);

// function validateForm(event) {
//   event.preventDefault();

//   const emailInput = document.querySelector('#email');

//   const emailValue = emailInput.value.trim();

//   if (emailValue === '') {
//     em.innerHTML= "Whoops! It looks like you forgot to add your email";
//     emailInput.focus();
//     return false;
//   }

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailValue)) {
//     em.innerHTML = "Please provide a valid email address";
//     emailInput.focus();
//     return false;
//   }

//   form.submit();
// }