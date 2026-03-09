console.log('login functionality coming');

document.getElementById('login-btn').addEventListener('click', function(){
    const UserNameInput = document.getElementById('input-Username');
    const contactUserName = UserNameInput.value;
    console.log(contactUserName)

    const inputPin = document.getElementById('input-pin')
    const pin = inputPin.value;
    console.log(pin)

    if(contactUserName=="admin" && pin=='admin123'){
        alert('login success')

        window.location.assign("/home.html");

    }
    else{
        alert('login failed')
        return;
    }
})