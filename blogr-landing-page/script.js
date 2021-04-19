const togglerBtn = document.getElementById('js-toggler-btn');

togglerBtn.addEventListener('click', function () {
    const btnImage = this.getElementsByTagName('img')[0];
    const isCurrentExpanded = btnImage.getAttribute('aria-expanded') == "true";
    const modelElementId = document.getElementById(this.dataset.target);
    const shouldExpand = !isCurrentExpanded;

    btnImage.setAttribute("aria-expanded", shouldExpand.toString());
    btnImage.setAttribute("src", shouldExpand ? "./images/icon-close.svg" : "./images/icon-hamburger.svg");
    shouldExpand
        ? modelElementId.classList.remove('collapse')
        : modelElementId.classList.add('collapse');
});

const accordionElements = document.querySelectorAll(".js-header-nav-accordion");

accordionElements.forEach(function (element) {
    element.addEventListener("click", function () {
        const icon = this.getElementsByTagName('img')[0];
        const isCurrentExpanded = icon.getAttribute('aria-expanded') == "true";
        const shouldExpand = !isCurrentExpanded;

        icon.setAttribute("aria-expanded", shouldExpand.toString());
        shouldExpand
            ? icon.classList.add('rotate-180')
            : icon.classList.remove('rotate-180');
        shouldExpand
            ? this.nextElementSibling.classList.remove('collapse')
            : this.nextElementSibling.classList.add('collapse');
    });
});