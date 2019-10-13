//API Key: 9aaa7238526040c3af8996c732feb1ea

const key = '9aaa7238526040c3af8996c732feb1ea';
let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9aaa7238526040c3af8996c732feb1ea&';
const image = document.getElementsByClassName('card-image-container');
const title = document.getElementsByClassName('card-title');
const description = document.getElementsByClassName('card-description');
const dateContent = document.getElementsByClassName('source-date');
const sourceName = document.getElementsByClassName('source-name');

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
    for (i = 0; i < 13; i++) {
      // Dates
      let date = new Date(data.articles[i].publishedAt);
      let dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
      dateContent[i].innerHTML = dateString;
      sourceName[i].children[0].innerHTML = data.articles[i].source.name;
      sourceName[i].children[0].href = data.articles[i].url;
      // Images
      if (data.articles[i].urlToImage != null) {
        image[i].style.backgroundImage = "url(" + data.articles[i].urlToImage + ")";
      }else {
        image[i].children[1].src = 'no-image.jpg';
      }
      // Text Content
      title[i].children[0].innerHTML = data.articles[i].title;
      title[i].children[0].href = data.articles[i].url;
      description[i].innerHTML = data.articles[i].description;
    }
  };

  xhr.send();
}

getData();

// function truncateText(maxLength, string) {
//   // var element = document.getElementsByClassName(selector),
//   const element = description[i];
//   truncated = element.innerText;
//   console.log(description[i]);
//
//   if (truncated.length > maxLength) {
//     truncated = truncated.substr(0, maxLength) + '...';
//   }
//
//   return truncated;
// }
function truncateText(maxLength, string) {
  const element = description[i];
  truncated = element;
  console.log(string);

  if (string.length > maxLength) {
    string = string.substr(0, maxLength) + '...';
  }

  return string;
}
