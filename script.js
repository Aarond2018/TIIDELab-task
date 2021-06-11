const userName = document.getElementById("user-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone"); 

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    alert(`${userName.value}\n ${email.value}\n ${phone.value}`);
    phone.value = ""; userName.value = ""; email.value="";
})