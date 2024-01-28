import { Home } from "./home.module.js";
 new Home();

let home = document.getElementById('home')
let search = document.getElementById('search');
$(function OPEN(params) {

  $('#search-btn').click(function () {
    home.classList.add('d-none');
      contact.classList.add('d-none')
      search.classList.remove('d-none');
    })

  $('#contact-us').click(function () {
      home.classList.add('d-none');
      search.classList.add('d-none');
      contact.classList.remove('d-none');
    })
  $('#categ').click(function () {
    home.classList.remove('d-none');
      search.classList.add('d-none');
      contact.classList.add('d-none');
    })
  $('#area').click(function () {
    home.classList.remove('d-none');
      search.classList.add('d-none');
      contact.classList.add('d-none');
    })
  $('#ingrend').click(function () {
    home.classList.remove('d-none');
      search.classList.add('d-none');
      contact.classList.add('d-none');
    }) 

    $('#openclose i').click(function () { 
     let innerWidth = $('.nav-tab').innerWidth();
     if($('.side-nav').css('left') == '0px'){
      $('.side-nav').animate({left:-innerWidth}, 500);
      document.getElementById("close").classList.remove("d-none");
      document.querySelector(".nav-tab").classList.remove("d-none");
      document.getElementById("close-x").classList.add("d-none");
   
     }else{
      $('.side-nav').animate({left:'0px'}, 500);
      document.getElementById("close").classList.add("d-none");
      document.getElementById("close-x").classList.remove("d-none");
     }
   
     })
})
let contact =document.getElementById('contact');
OPEN()
