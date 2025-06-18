document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("projectList");
  const items = list.querySelectorAll("li");
  const perPage = 4;
  let currentPage = 1;

  const totalPages = Math.ceil(items.length / perPage);
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function showPage(page) {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    items.forEach((item, index) => {
      item.style.display = (index >= start && index < end) ? "block" : "none";
    });

    prevBtn.style.display = page === 1 ? "none" : "inline-block";
    nextBtn.style.display = page === totalPages ? "none" : "inline-block";
  }

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.project-item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
    item.classList.toggle('active');
  });
});
// Gallery script to dynamically load images
  const gallery = document.getElementById("gallery");

  for (let i = 1; i <= 63; i++) {
    const imgBox = document.createElement("div");
    imgBox.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `images/Photographs/img${i}.jpg`; // use .png or .jpeg if that's your format
    img.alt = `Image ${i}`;

    imgBox.appendChild(img);
    gallery.appendChild(imgBox);
  }

// Modal logic for gallery
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

gallery.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

