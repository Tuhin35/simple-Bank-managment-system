document.getElementById('btn-submit').addEventListener('click',function(){


const emailFild = document.getElementById('user-email');
const email = emailFild.value;

const passwordField = document.getElementById('user-password');
const password = passwordField.value;

if (email === 'raihan' && password ==='1234') 
{
    window.location.href = 'bank.html'
}
else{
    alert("ke tumi bhai");
}


})