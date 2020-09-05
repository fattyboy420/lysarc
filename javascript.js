function myFunction(){
var response=window.prompt("Are you ok?(y/n)");
if(response=="y")
    {
        alert("That's nice. Have a nice day!");
    } 
  else if(response=="n")
    {
        alert("That's not nice. I hope you feel better.");
    } 
  else
  {
      alert("You have inputted something not y or n. Try again");
  } 
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
