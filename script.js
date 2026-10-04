const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

// Toggle mobile menu
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.textContent = nav.classList.contains("open") ? "x" : "☰";
});

// Smooth scrolling navigation
document.querySelectorAll("[data-scroll]").forEach((element) => {
  element.addEventListener("click", () => {
    const id = element.dataset.scroll;

    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Close mobile menu after clicking a link
    nav.classList.remove("open");
    menu.textContent = "☰";
  });
});

// Toggle View All untuk Semua Bagian (Projects & Organization)
const toggleBtns = document.querySelectorAll(".toggle-view-btn");

toggleBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    // Cari kotak utama dari section ini
    const section = this.closest(".section");
    // Cari semua kartu tersembunyi HANYA di dalam section ini
    const hiddenCards = section.querySelectorAll(".hidden-card");
    // Ambil kata dari data-type (misal: "Projects" atau "Experiences")
    const dataType = this.getAttribute("data-type");
    
    let isShowing = false;
    
    hiddenCards.forEach(card => {
      card.classList.toggle("show-card");
      if (card.classList.contains("show-card")) {
        isShowing = true;
      }
    });

    if (isShowing) {
      this.textContent = "Show Less ↑";
    } else {
      this.textContent = `View All ${dataType} ↓`;
      // Gulir sedikit ke atas kembali ke awal grid agar user tidak bingung
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

