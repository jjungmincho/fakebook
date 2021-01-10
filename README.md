# Fakebook

I cloned Facebook for Mobile using HTML, CSS and Vanilla Javascript.

---

## Table of Content
- [Technologies](https://github.com/jjessicacho/fakebook#technologies)
- [Setup](https://github.com/jjessicacho/fakebook#setup)
- [Features](https://github.com/jjessicacho/fakebook#features)
- [Sources](https://github.com/jjessicacho/fakebook#sources)

---

## Technologies
Languages and tools I used:
- HTML 5
- CSS 3
- JavaScript (ECMA6)

---
## Setup
### Screen Size Requirement
- Mobile (width:463px ~ 585px)

---

## Feature

### Login 
![login](https://user-images.githubusercontent.com/40417828/103497403-4469a580-4df6-11eb-9da3-35cbe9b1c05c.png)
- [x] Live Clock
```js
const clockContainer = document.querySelector("#js-clock"),
  clockTitle = clockContainer.querySelector("span");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
```

### News Feed (=Main page)
![newsfeed](https://user-images.githubusercontent.com/40417828/103497435-5f3c1a00-4df6-11eb-90d7-028e035b219b.png)
- [] Like button

### Profile
![profile](https://user-images.githubusercontent.com/40417828/103497457-6fec9000-4df6-11eb-8f2c-11ecfa2e08bd.png)

### Create Post
![createPost](https://user-images.githubusercontent.com/40417828/103497497-8d215e80-4df6-11eb-8bf6-24528a430374.png)

---

## Sources
- [Facebook Official Site](https://www.facebook.com)
- Photo: [Unsplash](https://unsplash.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Font: [Google Font - Roboto](https://fonts.google.com/specimen/Roboto?query=roboto)
