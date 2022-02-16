


const calculate =  document.getElementById('calculate').addEventListener('click',function(){
    const food =parseInt(document.getElementById("food").value);
    const rent = parseInt(document.getElementById("rent").value);
    const clothes =parseInt(document.getElementById("clothes").value);
    const incomeInput = parseInt(document.getElementById("income").value);
    const expenses = (food + rent + clothes);
    const balance = incomeInput- expenses;
    
    const totalExpenses = document.getElementById('totalExpenses').innerText = expenses;
    const totalbalance = document.getElementById('balance').innerText = balance;
    


    
});
const save =  document.getElementById('save').addEventListener('click',function(){
    const persentage = parseInt(document.getElementById('persentage').value);
    const finalpersentage = persentage/100;
    const saving = document.getElementById('saving').innerText = finalpersentage;
    const remain = document.getElementById('remain').innerText = totalbalance - finalpersentage;

});
