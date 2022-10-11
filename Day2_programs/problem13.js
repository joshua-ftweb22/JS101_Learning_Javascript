//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username="josh@gmail.com";
let password="9876543210";
let user="josh@gmail.co";
let pass="9876543210";
if(username==user){
  if(password==pass){
    console.log("login successful");
  }else{
    console.log("incorrect password");
  }
}else{
  console.log("incorrect username");
  }