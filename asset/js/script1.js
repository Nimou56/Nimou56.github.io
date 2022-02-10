var imgBurger = document.getElementById("imgBurger");
var menu = document.getElementById("menu");

document.getElementById("burger").addEventListener("click", function () {
    menu.classList.toggle("open");
});

// display none biographie

document.getElementById('a0').addEventListener("click", function () {
    document.getElementById('chevron').classList.toggle('fa-chevron-down');
    document.getElementById('chevron').classList.toggle('fa-chevron-up');
    // document.getElementById('imgBio').style.display = 'none';
    var etat = document.getElementById("bioNone");
    if (etat.style.display === "flex") {
        etat.style.display = "none";
    } else {
        etat.style.display = "flex";
      }
      var result = document.getElementById("imgBio");
    if (result.style.display === "none") {
        result.style.display = "flex";
    } else {
        result.style.display = "none";
      } 
  
});

document.getElementById('a1').addEventListener("click", function () {
    document.getElementById('chevron1').classList.toggle('fa-chevron-down');
    document.getElementById('chevron1').classList.toggle('fa-chevron-up');

    var etat = document.getElementById("forNone");
    if (etat.style.display === "block") {
        etat.style.display = "none";
    } else {
        etat.style.display = "block";
      }
      var result = document.getElementById("imgFor");
    if (result.style.display === "none") {
        result.style.display = "block";
    } else {
        result.style.display = "none";
      }
  
});


document.getElementById('a2').addEventListener("click", function () {
    document.getElementById('chevron2').classList.toggle('fa-chevron-down');
    document.getElementById('chevron2').classList.toggle('fa-chevron-up');

    var etat = document.getElementById("expNone");
    if (etat.style.display === "block") {
        etat.style.display = "none";
    } else {
        etat.style.display = "block";
      }
      var result = document.getElementById("imgExp");
    if (result.style.display === "none") {
        result.style.display = "block";
    } else {
        result.style.display = "none";
      }
 
});


document.getElementById('a3').addEventListener("click", function () {
    document.getElementById('chevron3').classList.toggle('fa-chevron-down');
    document.getElementById('chevron3').classList.toggle('fa-chevron-up');
    var etat = document.getElementById("comNone");
    if (etat.style.display === "block") {
        etat.style.display = "none";
    } else {
        etat.style.display = "block";
      }
      var result = document.getElementById("imgCom");
    if (result.style.display === "none") {
        result.style.display = "block";
    } else {
        result.style.display = "none";
      }
     
});

document.getElementById('a4').addEventListener("click", function () {
    document.getElementById('chevron4').classList.toggle('fa-chevron-down');
    document.getElementById('chevron4').classList.toggle('fa-chevron-up');
    var etat = document.getElementById("folioNone");
    if (etat.style.display === "flex") {
        etat.style.display = "none";
    } else {
        etat.style.display = "flex";
      }
      var result = document.getElementById("imgFolio");
    if (result.style.display === "none") {
        result.style.display = "flex";
    } else {
        result.style.display = "none";
      }
     
});