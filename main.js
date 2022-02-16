

// income and cost section
const calculate =  document.getElementById('calculate').addEventListener('click',function(){
    const food =parseInt(document.getElementById("food").value);
    const rent = parseInt(document.getElementById("rent").value);
    const clothes =parseInt(document.getElementById("clothes").value);
    const incomeInput = parseInt(document.getElementById("income").value);
    const expenses = (food + rent + clothes);
    const balance = parseInt(incomeInput- expenses);
    
    
    const totalExpenses = document.getElementById('totalExpenses').innerText = expenses;
    const totalbalance = document.getElementById('balance').innerText = balance;
    
    


    
});

// save and remaining balance section
const save =  document.getElementById('save').addEventListener('click',function(){
    const persentage = parseInt(document.getElementById('persentage').value);
    const income = parseInt(document.getElementById("income").value);

    const finalpersentage = parseInt(persentage * (income / 100));
    const saving = document.getElementById('saving').innerText = finalpersentage;
    
    
    const remaingBalance = (balance - finalpersentage);
    
    const remainss = document.getElementById('remain').innerText = remaingBalance;

});
