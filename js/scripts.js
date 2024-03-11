

window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


var dob = new Date("02/12/1999");  
var month_diff = Date.now() - dob.getTime();  
var age_dt = new Date(month_diff);   
var year = age_dt.getUTCFullYear();  
var age = Math.abs(year - 1970);  
      
document.getElementById("age").innerHTML = "Age: "+age;  

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    var mailtoLink = "mailto:amansarkar199@gmail.com" + 
                    "?subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    
    window.location.href = mailtoLink;
});