<script>
function toggleMenu() {
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.toggle("active");
}

function showSection(id)
    let sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");
    let selected = document.getElementById(id);
    if (selected.style.display === "none") {
        selected.style.display = "block";
    } else {
        selected.style.display = "none";
    }
}
</script>


function toggleMenu() {
  const menu = document.getElementById("hamburgerMenu");
  menu.classList.toggle("active");
Funju Innovation Hub is a creative and 
technological space dedicated to empowering youmg 
people with skills,opportunities,and tools to
 innovate,learn and thrive.Foumded in Funju village Wumingu-in 
 the heart of taita Taveta County- The hub is designed to bridge the
  digital divide by providing access to technology, training and membership.


  <a href="javascript:void(0);" class="icon" onclick="togglemenu()">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</a>
<div class="hamburger-menu" id="hamburgerMenu">
  <a href="#" onclick="showSection('homesection')">Home</a>
  <a href="#" onclick="showSection('aboutsection')">About Us</a>
  <a href="#" onclick="showSection('programsection')">Programs</a>
  <a href="#" onclick="showSection('resourcesection')">Resources</a>
  <a href="#" onclick="showSection('eventsection')">Events & Community</a>
</div