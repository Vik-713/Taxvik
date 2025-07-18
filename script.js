// document.addEventListener("DOMContentLoaded", () => {
//     // Smooth scrolling for navigation links
//     const links = document.querySelectorAll("a[href^='#']");
//     links.forEach(link => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetId);
//             if (targetSection) {
//                 targetSection.scrollIntoView({
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });

//     // Scroll animation for sections and service cards
//     const sections = document.querySelectorAll(".section, .service-card");
//     const options = { threshold: 0.1 };

//     const revealOnScroll = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);

//     sections.forEach(section => {
//         section.classList.add("hidden");
//         revealOnScroll.observe(section);
//     });

//     // Dynamic year in footer
//     const yearSpan = document.querySelector("#year");
//     if (yearSpan) {
//         yearSpan.textContent = new Date().getFullYear();
//     }
// });