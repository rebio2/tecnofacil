document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            const targetHref = e.currentTarget.getAttribute("href");

            if (targetHref.startsWith("#")) {
                // Manejar desplazamiento suave a secciones locales
                e.preventDefault(); // Previene la acción predeterminada

                const targetElement = document.querySelector(targetHref);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            } 
        });
    });
});

// Seleccionar los elementos que quieres observar
const elements = document.querySelectorAll('.animate-on-scroll');

// Animaciones al hacer scroll
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));

document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
});

// Form feedback visual
const emailInput = document.querySelector("#email");
emailInput.addEventListener("input", () => {
    const formMessage = document.querySelector(".form-message");
    if (emailInput.validity.valid) {
        formMessage.textContent = "Correo válido 😊";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Introduce un correo válido 😞";
        formMessage.style.color = "red";
    }
});
