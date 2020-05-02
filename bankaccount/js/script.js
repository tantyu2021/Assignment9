/*eslint-env browser*/

//===Part 1 – The UI=====================
var bankprocess = function() {
    var name, deposit, withdrawal, msgN, msgD, msgW, btitle, filling;

    //msg = 'Please complete all required info.';
    filling = '';
    msgN = 'Please enter your name.';
    msgD = 'Please enter your deposit.';
    msgW = 'Please enter your withdrawal.';
    btitle = 'Table-info. Requared fields.';
    //name = document.getElementById('name').value;
    name = prompt('Enter your name'); 
    //deposit = document.getElementById('deposit').value;
    deposit = prompt('Enter your deposit'); 
    //withdrawal = document.getElementById('withdrawal').value;
    withdrawal = prompt('Enter your withdrawal'); 

    //info validation
    if (name === '') {
        name = msgN;
 
    }
    if (deposit === '') {
        deposit = msgD;

    }
    if (withdrawal === '') {
        withdrawal = msgW;

    }

document.getElementById('nReg').innerHTML = 'Name: ' + name + '<br>';
document.getElementById('dReg').innerHTML = 'Deposit: ' + deposit + '<br>';
document.getElementById('wReg').innerHTML = 'Withdrawal: ' + withdrawal + '<br>';

//fromlab13 -t15

    document.getElementById('bankregister_title').innerHTML = btitle;
        filling += '<tr><td>Name:</td><td>' + name + '</td></tr>';
        filling += '<tr><td>Deposit:</td><td>' + deposit + '</td></tr>';
        filling += '<tr><td>Withdrawal:</td><td>' + withdrawal + '</td></tr>';
        document.getElementById('registration_info').innerHTML = filling;
        

};

window.addEventListener('load', function() {
    document.getElementById('name').addEventListener('click', bankprocess);
    document.getElementById('deposit').addEventListener('click', bankprocess);
    document.getElementById('withdrawal').addEventListener('click', bankprocess);

//     if(name === '' || deposit === '' || withdrawal === ''){
//  // alert('Please enter required info');
//   document.getElementById('bankregister').innerHTML = 'Please enter required info';
// } else {}


});


//===Part 2 – The Closure Function================

// function bankAccount (ownerName) {
//     var balance, owner;
//      withdrawal(withdrawalAmount);
// }

function bankAccount(amount) {
    this.balance = amount; 
    this.deposit = deposit; 
    this.withdraw = withdraw; 
    this.toString = toString; 
} 
function deposit(amount) { 
    this.balance += amount; 
} 
function withdraw(amount) { 
    if (amount <= this.balance) { 
        this.balance -= amount; 
    } 
    if (amount > this.balance) { 
        print("cannot process"); 
    } 
} 
function toString() { 
    return "Balance: " + this.balance; 
} 
var account = new bankAccount(150); 
account.deposit(100); 
console.log(account.toString()); 
//window.document.write("Balance: " + this.balance);
account.withdraw(70); 
console.log(account.toString());
//window.document.write("Balance: " + this.balance); 
account.withdraw(8);    
console.log(account.toString());
//window.document.write("Balance: " + this.balance);