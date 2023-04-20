document.getElementById('InputEmail1').addEventListener("keyup",function(){

    InputEmail = document.getElementById('InputEmail1').value

    console.log(InputEmail)
})


function ForgotPassword() {
    console.log("calling ForgotPassword");
    let data = {        
      "email":document.getElementById("InputEmail1").value,
    };
    console.log(data);
  
    fetch(`https://localhost:44386/api/User/ForgotPassword?email=${data.email}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(data)
    })
    .then((response)=>response.json())
      .then((data) => {
          console.log('success', data);
        localStorage.setItem("token",data.data) //backend controller path token data
      })
      .catch((error) =>{
          console.log('Error:',error);
      })
  }
  