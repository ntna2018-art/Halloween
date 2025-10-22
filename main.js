
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('ul');

if (menuIcon && navList) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
  });
}

const button = document.getElementById("startAnimation");
const phuthuy = document.getElementById("phuthuy");
const laudai = document.getElementById("laudai");
const nhen = document.getElementById("nhen");

if (button) {
  button.addEventListener("click", () => {
    
    [phuthuy, laudai, nhen].forEach(el => {
      el.classList.add('show');
      el.style.animation = 'none';
      void el.offsetWidth; 
    });

  
    laudai.style.animation = "laudaiMove 4s ease-out forwards";
    phuthuy.style.animation = "phuthuyFly 5s ease-in-out forwards";
    nhen.style.animation = "nhenDrop 4s ease-in forwards";
  });
}

function music() {
  const nhac = document.getElementById("bgmusic");
  if (!nhac) return;

  if (nhac.paused) {
    nhac.play();
    localStorage.setItem("musicPlaying", "true");
  } else {
    nhac.pause();
    localStorage.setItem("musicPlaying", "false");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const nhac = document.getElementById("bgmusic");
  if (!nhac) return;

  if (localStorage.getItem("musicPlaying") === "true") {
    nhac.play().catch(() => {});
  }
});

function toggleMusic() {
      const frame = document.getElementById("music-frame");
      frame.contentWindow.postMessage("toggleMusic", "*");
    }

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('success').style.display = 'block';
      form.reset();
    });
    
