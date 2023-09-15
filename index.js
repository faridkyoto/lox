
    const hamburgerDiv = document.querySelector(".header-hamburger-div");
    const links = document.querySelector(".links");

    hamburgerDiv.addEventListener("click", function () {
        links.classList.toggle("open");
    });
