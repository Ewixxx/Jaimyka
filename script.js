let users = [];
const registerbtn = document.getElementById("reg")
const loginbtn = document.getElementById("login")

registerbtn.addEventListener("click",function() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    users.push({ username, password });

    // You can store the user data in a database in a real application.
    if(username && password === null){
        alert("Please fill out the required filled")
  
    }else{
    alert("Registration successful. Please login.");    
    document.getElementById("registrationForm").reset();
    register.classList.remove("regform");
    }
})

loginbtn.addEventListener("click",function() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful.")
        window.location.href=('MainPage/index.html');
      
    } else {
        alert("Login failed. Invalid username or password.");
     
    }

    document.getElementById("loginForm").reset();
})

let register = document.getElementById("reg-container")
const signup = document.getElementById("signupbtn")
const close = document.getElementById("back")
const cancel = document.getElementById("cancel")


signup.addEventListener("click",function(){
    register.classList.add("regform");
})
close.addEventListener("click",function(){
    register.classList.remove("regform");
})

 cancel.addEventListener("click",function() {
    register.classList.remove("regform");
    window.history.go(-1);
})

