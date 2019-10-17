//API Key: 9aaa7238526040c3af8996c732feb1ea

const key = '9aaa7238526040c3af8996c732feb1ea';
let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9aaa7238526040c3af8996c732feb1ea&';
const mainImage = document.getElementById('featured');
const mainImageContainer = document.getElementsByClassName('main-card');


// Function that places image from API into card on hompepage
function getData(newCategory) {
  if (newCategory == null) {
    newCategory = '';
  }

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url + 'category=' + newCategory, true);
  xhr.onload = function () {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
    for (i = 0; i < 7; i++) {
      num = i;
      getMainImage(data, num);
    }
  };

  xhr.send();
}

function getMainImage(data, num) {
  if (data.articles[num].urlToImage != null) {
    mainImageContainer[num].src = data.articles[num].urlToImage;
  }else {
    mainImageContainer[num].src = 'no-image.jpg';
  }

  mainImageContainer[num].style.backgroundImage = "url(" + data.articles[num].urlToImage + ")";

}

getData();

/////// ORIGINAL JS
// Nav Menu

// opens responsive navigation menu
// function openNavMenu() {
//   menuToggle[0].addEventListener('click', function () {
//       menu[0].classList.remove('hide');
//       menu[0].style.position = 'fixed';
//       menu[0].style.display = 'inline-flex';
//       header[0].style.overflow = 'visible';
//     });
// }
//
// // shows desktop navigation
// function widthChange() {
//   if (mq1.matches) {
//     menu[0].style.position = 'static';
//     menu[0].classList.remove('hide');
//   }
// }
//
// //closes responsive nav menu
// function closeNavMenu() {
//   menuClose[0].addEventListener('click', function () {
//       menu[0].classList.add('hide');
//       header[0].style.overflow = 'hidden';
//     });
// }
//
// //closes menu when link clicked
// function clickMenuClose() {
//   navList.addEventListener('click', function () {
//         header[0].style.overflow = 'hidden';
//       });
// }
//
// // Hides menu until screen is scrolled up
// function hideMenu() {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       header[0].classList.remove('hide');
//     } else {
//       header[0].classList.add('hide');
//     }
//
//     prevScrollpos = currentScrollPos;
//   };
// }
//
// // Function to populate cards with information
//
// function newRequest(section, newCategory) {
//
//   if (section == null) {
//     section = 'top-stories';
//   }
//
//   if (newCategory == null) {
//     newCategory = '';
//   }
//
//   const newsSection = document.querySelectorAll('#' + section + ' ' +  '.section_card_container .card');
//   const titleSection = document.querySelectorAll('#' + section + ' ' + '.section_card_container .card .card_title_container');
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url + 'category=' + newCategory, true);
//   xhr.onload = function () {
//     var data = JSON.parse(xhr.responseText);
//     for (var i = 0; i < 7; i++) {
//       let date = new Date(data.articles[i].publishedAt);
//       let dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
//       newsSection[i].children[0].innerHTML = section;
//       if (data.articles[i].urlToImage != null) {
//         newsSection[i].children[1].src = data.articles[i].urlToImage;
//       }else {
//         newsSection[i].children[1].src = 'no-image.jpg';
//       }
//
//       titleSection[i].children[0].innerHTML = data.articles[i].title;
//       titleSection[i].children[0].href = data.articles[i].url;
//       titleSection[i].children[1].innerHTML = data.articles[i].description;
//       titleSection[i].children[2].children[0].innerHTML = dateString;
//       titleSection[i].children[2].children[1].innerHTML = data.articles[i].source.name;
//     }
//   };
//
//   xhr.send();
// }
//
// newRequest();
// newRequest('business', 'business');
// newRequest('entertainment', 'entertainment');
// newRequest('health', 'health');
// newRequest('science', 'science');
// newRequest('sports', 'sports');
// newRequest('technology', 'technology');
//
// openNavMenu();
// closeNavMenu();
// hideMenu();   // hides menu on scroll
// clickMenuClose();  // closes menu when link clicked on resp nav
// window.addEventListener('resize', widthChange);// opens desktop nav
// //closes desktop nav
// window.addEventListener('resize', function () {
//   if (!mq1.matches) {
//     menu[0].classList.add('hide');
//     menu[0].style.position = 'fixed';
//   }
// });
//
// // Smooth Scroll
//
// function smoothScroll(target, duration) {
//   let targetSection = document.querySelector(target);
//   let targetPosition = targetSection.getBoundingClientRect().top;
//   let startPosition = window.pageYOffset;
//   let startTime = null;
//
//   function animation(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     let timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, startPosition, targetPosition, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }
//
//   function ease(t, b, c, d) {
// 	   t /= d / 2 ;
// 	   if (t < 1) return c / 2 * t * t + b;
// 	   t--;
// 	   return -c / 2 * (t * (t - 2) - 1) + b;
//   }
//
//   requestAnimationFrame(animation);
// }
//
//
//
// navList.addEventListener('click', function (e) {
//   let target = '';
//   if (e.target && e.target.className == 'home') {
//     target = '.top-stories';
//     smoothScroll(target, 1000);
//   }else if (e.target && e.target.className == 'business') {
//     target = '.business-stories';
//     smoothScroll(target, 1000);
//   }else if (e.target && e.target.className == 'entertainment') {
//     target = '.entertainment-stories';
//     smoothScroll(target, 1000);
//   }else if (e.target && e.target.className == 'health') {
//     target = '.health-stories';
//     smoothScroll(target, 1000);
//   }else if (e.target && e.target.className == 'science') {
//     target = '.science-stories';
//     smoothScroll(target, 1000);
//   }else if (e.target && e.target.className == 'sports') {
//     target = '.sports-stories';
//     smoothScroll(target, 1000);
//   }
//   else if (e.target && e.target.className == 'technology') {
//     target = '.technology-stories';
//     smoothScroll(target, 1000);
//   }
//
// });