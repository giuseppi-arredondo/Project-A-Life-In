    // === A Life In - Script ===
    // Smooth animations, header behavior, and form validation

    document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const sections = document.querySelectorAll(".fade-section");
    const form = document.getElementById("appointmentForm");

    // Header shrink on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
        header.classList.add("shrink");
        } else {
        header.classList.remove("shrink");
        }
    });

    // Fade-in animation for sections when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Form validation
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const birth = form.birthdate.value;

        if (!email.includes("@gmail.com")) {
        alert("Please enter a valid Gmail address.");
        return;
        }

        if (phone.length < 8 || phone.length > 11) {
        alert("Please enter a valid phone number (8–11 digits).");
        return;
        }

        alert("✅ Thank you! Your appointment request has been sent.");
        form.reset();
    });

    // Flag hover animation
    const flags = document.querySelectorAll(".Flagssize");
    flags.forEach(flag => {
        flag.addEventListener("mouseenter", () => {
        flag.style.transform = "scale(1.15)";
        flag.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        flag.style.boxShadow = "0 0 15px rgba(255,255,255,0.4)";
        });

        flag.addEventListener("mouseleave", () => {
        flag.style.transform = "scale(1)";
        flag.style.boxShadow = "none";
        });
    });
    });
