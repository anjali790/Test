const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const display = document.querySelector(".display")
const readBtn = document.querySelector(".readbtn");


btn.addEventListener("click", function () {
    display.innerHTML = "";

    fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let show = data[i]["show"]
                var html = `<div class ="displayContainer">
            <div class="image"><img src="${show["image"]["original"]}" alt=""></div>
            <h2>${show["name"]}</h2>
            <p>${show["premiered"]}</p>
            <p>${show["language"]}</p>
            <a href="${show["url"]}"><button class = "readBtn">Show Details</button></a> 
            </div>`

                display.innerHTML += html;
            }
        });
});