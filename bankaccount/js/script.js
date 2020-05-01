/*eslint-env browser*/

//===Part 1 – The UI=====================
var bankprocess = function() {
    var name, deposit, withdrawal, msgN, msgD, msgW, btitle;

    //msg = 'Please complete all required info.';
    msgN = 'Please enter your name.';
    msgD = 'Please enter your deposit.';
    msgW = 'Please enter your withdrawal.';
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

    // //when writing red
    // document.getElementById('bankregister_title').innerHTML = btitle;
    // if (btitle === msg) {
    //     html += '<tr><td>Name:</td><td>' + name + '</td></tr>';
    //     html += '<tr><td>Deposit:</td><td>' + dewposit + '</td></tr>';
    //     html += '<tr><td>Withdrawal:</td><td>' + withdrawal + '</td></tr>';
        
    // } 
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
var ownerName = prompt('Please enter your name')
function bankAccount (ownerName) {
    var balance, owner;
     withdrawal(withdrawalAmount);
}

