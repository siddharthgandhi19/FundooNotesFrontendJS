// console.log("hello world")

document.getElementById('firstName').addEventListener("keyup",function(){

    firstName = document.getElementById('firstName').value

    console.log(firstName)
})


document.getElementById('lastName').addEventListener("keyup",function(){

    lastName = document.getElementById('lastName').value

    console.log(lastName)
})

document.getElementById('UsernameEmail').addEventListener("keyup",function(){

    UsernameEmail = document.getElementById('UsernameEmail').value

    console.log(UsernameEmail)
})

document.getElementById('Password').addEventListener("keyup",function(){

    Password = document.getElementById('Password').value

    console.log(Password)
})

document.getElementById('ConfirmPassword').addEventListener("keyup",function(){

    ConfirmPassword = document.getElementById('ConfirmPassword').value

    console.log(ConfirmPassword)
})

