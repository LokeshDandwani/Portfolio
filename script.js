const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
function toggleContent() {
    var extraContent = document.getElementById("extraContent");
    var btnText = document.getElementById("readMoreBtn");

    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";  // Show the extra content
        btnText.innerHTML = "Read Less";  // Change button text to "Read Less"
    } else {
        extraContent.style.display = "none";  // Hide the extra content
        btnText.innerHTML = "Read More";  // Change button text back to "Read More"
    }
}
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 
