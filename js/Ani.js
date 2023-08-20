window.addEventListener("scroll", function() {
        var menu = document.querySelector(".Caixa");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            menu.classList.add("scrolled");
        } else {
            menu.classList.remove("scrolled");
        }
});
