function myFunction(){
  
  var element= document.body;
  element.classList.toggle("dark-mode");
}
document.addEventListener('DOMContentLoaded', function(){
  const MoonImage=document.getElementById('moonIcon');
  const SunImage=document.getElementById('sunIcon');

  MoonImage.addEventListener('click', myFunction);
  SunImage.addEventListener('click', myFunction);
});