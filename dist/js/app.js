document.addEventListener('DOMContentLoaded', function () {
    const jsonPath = "jsonfile.json";
    let createFragment = document.createDocumentFragment();
    let buttonShow = document.querySelector(".content_container_button");
    let tableEl = document.querySelector(".content_container_table")
    const toggleFunc = () => {
        tableEl.classList.toggle("active");
        buttonShow.classList.toggle("active");
    }
    document.querySelector(".content_container_button").onclick = () => {
        toggleFunc();
    }
    fetch(jsonPath).then(res => res.json())
        .then(data => {
            data.feeds.forEach((el, i) => {
                if (i >= 11) {
                    toggleFunc();
                }
                let createTr = document.createElement("tr");
                createTr.innerHTML = `<td>${el.id}</td><td>${el.title}</td><td>${el.userId + "." + Math.floor(Math.random() * 20)}</td>`
                createFragment.append(createTr);
            })
            document.querySelector(".content_container_table").append(createFragment);
        })
})