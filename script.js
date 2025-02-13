document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const links = document.querySelectorAll('.navlink');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const link = document.querySelector(`.navlink[href="#${entry.target.id}"]`);
if (entry.isIntersecting) {
    link.classList.add('active');
} else {
    link.classList.remove('active');
}
});
}, {
threshold: 0.3 
});
links.forEach(link => {
const targetId = link.getAttribute('href').substring(1);
const targetDiv = document.getElementById(targetId); 

if (targetDiv) {
observer.observe(targetDiv);
}
});


const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const overlay = document.createElement('div');  
overlay.classList.add('side-menu-overlay');
document.body.appendChild(overlay);  
menuToggle.addEventListener('click', () => {
    const currentRight = sideMenu.style.right;
    if (currentRight === '0px') {
        sideMenu.style.right = '-250px';  
        overlay.style.display = 'none';   
    } else {
        sideMenu.style.right = '0px';   
        overlay.style.display = 'block'; 
    }
});
overlay.addEventListener('click', () => {
    sideMenu.style.right = '-250px';  
    overlay.style.display = 'none';   
});






document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !phone || !message) {
        alert("Please fill out all required fields.");
        event.preventDefault(); 
        return;
    }
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); 
        return;
    }
});



const fontAwesomeCDN1 = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";
const fontAwesomeCDN2 = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.6.0/css/all.min.css";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = fontAwesomeCDN1;
link.onerror = function () {
this.href = fontAwesomeCDN2;
};
document.head.appendChild(link);





