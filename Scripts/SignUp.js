console.log("hello Signup")

//  Signup();


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

function Signup(){
    let data = {
        "firstName":document.getElementById("firstName").value,
        "lastName":document.getElementById("lastName").value,
        "email":document.getElementById("UsernameEmail").value,
        "password":document.getElementById("Password").value   
      }
    
    fetch('https://localhost:44386/api/User/UserRegistration', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify(data),
      })
      .then((response)=>response.json())
      .then((data) => {
          console.log('success', data);
      })
      .catch((error) =>{
          console.log('Error:',error);
      })
    }