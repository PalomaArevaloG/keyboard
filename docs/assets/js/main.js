"use strict";let textarea=document.querySelector(".js-textarea"),keys=document.querySelectorAll(".js-key"),square=document.querySelectorAll(".square"),del=document.querySelector(".js-delete"),caps=document.querySelector(".js-caps"),space=document.querySelector(".js-space"),tab=document.querySelector(".js-tab"),more=document.querySelector(".js-more"),more2=document.querySelector(".js-more2"),secondary=document.querySelector(".js-secondary");for(let e=0;e<keys.length;e++)keys[e].addEventListener("click",handleButtonClick);function handleButtonClick(e){e.preventDefault(),textarea.innerHTML+=e.currentTarget.innerText,console.log(e.currentTarget.innerText),console.log(e.currentTarget.innerText.toUpperCase())}function handleSpaceClick(e){e.preventDefault(),textarea.innerHTML+="&nbsp;"}function handleDelClick(e){e.preventDefault(),textarea.innerHTML=textarea.innerHTML.slice(0,-1)}function handleTabClick(e){e.preventDefault(),textarea.innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;"}function handleCapsClick(e){e.preventDefault(),caps.classList.toggle("press"),keys.forEach(e=>e.classList.toggle("upper"))}function handleMoreClick(e){e.preventDefault(),secondary.classList.toggle("hidden"),secondary.classList.toggle("second")}space.addEventListener("click",handleSpaceClick),del.addEventListener("click",handleDelClick),tab.addEventListener("click",handleTabClick),caps.addEventListener("click",handleCapsClick),more.addEventListener("click",handleMoreClick),more2.addEventListener("click",handleMoreClick);