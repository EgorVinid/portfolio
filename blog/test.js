const secondPost = document.querySelector(".post2");
let dateDiv = document.createElement("div");
dateDiv.className = "date";
dateDiv.innerHTML = "10 октября 2021";
let postText = document.createElement("p");
postText.innerHTML = "Этот текст создан в JS файле и отображается на странице. Круто, правда?";

secondPost.appendChild(dateDiv);
secondPost.appendChild(postText);