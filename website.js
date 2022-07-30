// navigation bar
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})

function myFunction(){
    alert
      let userInput = document.querySelector("#userInput");
      let userOuput = document.querySelector("#userOuput");
  
      userOutput.innerHTML = "Thank you for submitting your comment, we have logged this as: " + userInput.value;
  
    }
  
  function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' characters';
  }
  
  function countChars(obj){
    var maxLength = 140;
    var strLength = obj.value.length;
    
    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
        document.getElementById("comments").value = '<span style="color: red;">';
      }else{
        document.getElementById("charNum").innerHTML = strLength+' out of '+maxLength+' characters';
    }
  }