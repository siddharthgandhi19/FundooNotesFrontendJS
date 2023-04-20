console.log("hello js")

let email
let password


document.getElementById('InputEmail1').addEventListener("keyup",function(){

    InputEmail = document.getElementById('InputEmail1').value

    console.log(InputEmail)
})

document.getElementById('InputPassword1').addEventListener("keyup",function(){

    InputPassword = document.getElementById('InputPassword1').value

    console.log(InputPassword)
})

function Login () {
  console.log("calling login");
  let data = {        
    "email":document.getElementById("InputEmail1").value,
    "password": document.getElementById("InputPassword1").value
  };
  console.log(data);

  fetch("https://localhost:44386/api/User/UserLogin", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
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
