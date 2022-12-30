//------- Navigacija heder meni ----//

const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.
  addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
  }))

// --- otvaranje/zatvranje galerije slika i zumiranje -- //

  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");

  function openfullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
  }

  function closefullImg(){
    fullImgBox.style.display = "none";
  }

//-----------Slanje email kontakt----------//

function sendEmail(){
  Email.send({
Host : "smtp.elasticemail.com",
Username : "sajttest123@gmail.com",
Password : "50D2983E061E32C4AA2295E218FAEDC8BC32",
To : 'jovicmiroslav22@gmail.com',
From : 'sajttest123@gmail.com',
Subject : "Primljena poruka i kontakt info",
Body : "Ime: " + document.getElementById("name").value
    +"<br> Email: " +document.getElementById("email").value
    +"<br> Telefon: " +document.getElementById("phone").value
    +"<br> Poruka: " +document.getElementById("message").value
   
}).then(
message => alert("Uspesno poslata poruka")
);
}


//--------nazad na vrh buton ----------//

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

