document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add sticky effect to header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust value as needed
            header.classList.add('sticky-top-scrolled');
        } else {
            header.classList.remove('sticky-top-scrolled');
        }
    });

    // Example for form submission (client-side validation can be added here)
    const contactForm = document.querySelector('#inscription form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Simple client-side validation example
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;

            if (nom === "" || email === "") {
                alert("Veuillez remplir tous les champs obligatoires (Nom et Email).");
                return;
            }

            // In a real application, you'd send this data to a server
            // using Fetch API or XMLHttpRequest.
            console.log('Formulaire soumis:', {
                nom: nom,
                email: email,
                telephone: document.getElementById('telephone').value,
                permis_souhaite: document.getElementById('permis-souhaite').value,
                message: document.getElementById('message').value
            });

            alert("Votre demande a été envoyée avec succès ! Nous vous recontacterons bientôt.");
            contactForm.reset(); // Reset the form after submission
        });
    }

    // You can add more JavaScript for:
    // - Image lazy loading
    // - Animations on scroll (e.g., using libraries like AOS - Animate On Scroll)
    // - Dynamic content loading (e.g., from an API for blog posts)
    // - Interactive calendar for booking lessons
});


