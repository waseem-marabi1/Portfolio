var menuBtn = document.getElementById("menuBtn")
var mobileMenu = document.getElementById("mobileMenu")
var mobileLinks = document.querySelectorAll(".mobile-link")

menuBtn.onclick = function () {
    mobileMenu.classList.toggle("hidden")
}

mobileLinks.forEach(function (link) {
    link.onclick = function () {
        mobileMenu.classList.add("hidden")
    }
})

var movieDemo = document.getElementById("movieDemo")
var moviegit = document.getElementById("moviegit")
var luxDemo = document.getElementById("luxDemo")
var luxgit = document.getElementById("luxgit")
var dentalDemo = document.getElementById("dentalDemo")
var dentalgit = document.getElementById("dentalgit")

movieDemo.onclick = function () {
    window.open("https://waseem-marabi1.github.io/MovieHub/", "_blank")
}

moviegit.onclick = function () {
    window.open("https://github.com/waseem-marabi1/MovieHub", "_blank")
}

luxDemo.onclick = function () {
    window.open("https://waseem-marabi1.github.io/Lux-Optics/", "_blank")
}

luxgit.onclick = function () {
    window.open("https://github.com/waseem-marabi1/Lux-Optics", "_blank")
}

dentalDemo.onclick = function () {
    window.open("https://waseem-marabi1.github.io/DentalCare-Clinic-Website/", "_blank")
}

dentalgit.onclick = function () {
    window.open("https://github.com/waseem-marabi1/DentalCare-Clinic-Website", "_blank")
}

var reveals = document.querySelectorAll(".reveal")

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
    })
}, {
    threshold: 0.15
})

reveals.forEach(function (item) {
    observer.observe(item)
})

var toTop = document.getElementById("toTop")

window.onscroll = function () {
    if (window.scrollY > 600) {
        toTop.classList.add("show")
    } else {
        toTop.classList.remove("show")
    }
}

toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
