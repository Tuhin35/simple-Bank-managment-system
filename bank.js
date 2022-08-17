document.getElementById('btn-deposite').addEventListener('click',function(){

const depositeValue = document.getElementById('deposite-filed')

const deposite = depositeValue.value;

depositeValue.value = '';
if(isNaN(deposite)){
    alert("Enter Number Not Letter");
    return
}


const depositeTotalElement = document.getElementById('deposite-total');
const depositeTotal = depositeTotalElement.innerText;

const atMomentDeposite = parseFloat(deposite) + parseFloat(depositeTotal) ;

depositeTotalElement.innerText = atMomentDeposite;

const totalBalance = document.getElementById('balance-total')
const newToatalElement = totalBalance.innerText;
const NewTotal = parseFloat(newToatalElement) + parseFloat(atMomentDeposite);
totalBalance.innerText = NewTotal ;
depositeValue.value ='';
})

document.getElementById('btn-withdraw').addEventListener('click',function(){


    const withdrawValue = document.getElementById('withdraw-filed')

    const withdraw = withdrawValue.value;

    const newWithdrawAmount = parseFloat(withdraw);

    withdrawValue.value = '';
    if(isNaN(withdraw)){
        alert("Enter Number Not Letter");
        return
    }



const withdrawTotalElement = document.getElementById('withdraw-total');


const withdrawTotal =withdrawTotalElement.innerText;

const previousWithdrawTotal = parseFloat(withdrawTotal);





const totalBalance = document.getElementById('balance-total')
const newToatalElement = totalBalance.innerText;
const previousBalanceTotal = parseFloat(newToatalElement);

if (newWithdrawAmount >= previousBalanceTotal ) {
     alert("taka kih magna ase")
     return;
}
const atMomentWithdraw = parseFloat(withdraw) + parseFloat(withdrawTotal)
withdrawTotalElement.innerText = atMomentWithdraw;

const NewTotal = parseFloat(newToatalElement) - parseFloat(atMomentWithdraw);
totalBalance.innerText = NewTotal ;


})