document.getElementById('Password').addEventListener("keyup",function(){

    Password = document.getElementById('Password').value

    console.log(Password)
})


document.getElementById('ConfirmPassword').addEventListener("keyup",function(){

    ConfirmPassword = document.getElementById('ConfirmPassword').value

    console.log(ConfirmPassword)
})






function ResetPassword() {
    console.log("calling Reset Pass");
    let data = {        
      "newPassword":document.getElementById("Password").value,
      "confirmPassword":document.getElementById("ConfirmPassword").value,
      
    };
    console.log(data);
  
    fetch("https://localhost:44386/api/User/ResetPassword", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
    .then((response)=>response.json())
      .then((data) => {
          console.log('success', data);
      })
      .catch((error) =>{
          console.log('Error:',error);
      })
  }
  