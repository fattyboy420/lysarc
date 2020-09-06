
var dropdownOpened=-1;

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function Function(number) {
  if(dropdownOpened==0)
  {
    document.getElementById("myDropdown").classList.toggle("show");
  }
if(dropdownOpened==1)
  {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  if(number== 1 ){
  document.getElementById("myDropdown").classList.toggle("show");
    dropdownOpened=0;
  }
else{
  document.getElementById("myDropdown2").classList.toggle("show");
dropdownOpened=1;
}

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
dropdownOpened=-1;
}
