// Dark mode
const toggleSwitch = document.querySelector('#toggle');
toggleSwitch.addEventListener('change', function(event) {
  if (event.target.checked) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'disabled');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    document.documentElement.classList.add('dark');
    toggleSwitch.checked = true;
  } else {
    document.documentElement.classList.remove('dark');
    toggleSwitch.checked = false;
  }
});
// view button
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("#btn-view");
  button.addEventListener("click", function() {
    var targetElement = document.querySelector("#base");

    targetElement.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start" // Mulai elemen di bagian atas viewport
    });
  });
});


// Menu button
const menuBtn = document.querySelector('#menu');
const svgBtn = document.querySelector('#svgButton');
const listMenu = document.querySelector('#list-menu');

menuBtn.addEventListener('click', function() {
  listMenu.classList.toggle('translate-x-[-500px]');
  svgBtn.classList.toggle('text-sky-500');
  svgBtn.classList.toggle('text-slate-500');
});

document.addEventListener('click', function(e) {
  if (!menuBtn.contains(e.target)) {
    listMenu.classList.add('translate-x-[-500px]');
    svgBtn.classList.add('text-slate-500');
    svgBtn.classList.remove('text-sky-500');
  }
});

// Memilih semua elemen dengan kelas 'nav-link'
const navLinks = document.querySelectorAll('.nav-link');

// Menggunakan event listener untuk setiap elemen 'nav-link'
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
      event.preventDefault();

      navLinks.forEach(function(link) {
          link.classList.remove('text-sky-500');
      });

      navLink.classList.add('text-sky-500');

      var page = navLink.dataset.page;
      localStorage.setItem('activePage', page); // Menyimpan halaman yang dikunjungi
      loadPage(page);
  });
});

function loadPage(page) {
  $.ajax({
      url: "../../public/" + page + ".html",
      cache: false,
      success: function(result) {
        $("#content").html(result); 
          localStorage.setItem('activePage', page); // Menyimpan halaman yang sedang aktif
          window.scrollTo(0, 0);
      }
  });
}

// document.addEventListener('DOMContentLoaded', function() {
//   const activePage = localStorage.getItem('activePage');
//   if (activePage) {
//       // Memulihkan status halaman terakhir yang dikunjungi
//       const targetNavLink = document.querySelector('[data-page="' + activePage + '"]');
//       if (targetNavLink) {
//           targetNavLink.classList.add('text-sky-500');
//           loadPage(activePage);
//       }
//   }
// });

// type it
