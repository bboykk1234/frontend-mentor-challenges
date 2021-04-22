const togglerBtn = document.getElementById('menu-toggler');

togglerBtn.addEventListener('click', function () {
    const btnImage = this.getElementsByTagName('img')[0];
    const isCurrentExpanded = btnImage.getAttribute('aria-expanded') == "true";
    const modelElementId = document.querySelector(this.getAttribute('data-js-target'));
    const shouldExpand = !isCurrentExpanded;

    btnImage.setAttribute("aria-expanded", shouldExpand.toString());
    btnImage.setAttribute("src", shouldExpand ? "./images/icon-close.svg" : "./images/icon-hamburger.svg");
    shouldExpand
        ? modelElementId.classList.remove('collapse')
        : modelElementId.classList.add('collapse');
});


const collapsePrevExpandedElements = (currentElement) => {
    const prevExpandedElements = document.querySelectorAll("#menu-accordion [data-js-toggle='collapse'][aria-expanded='true']");
    prevExpandedElements.forEach(function (element) {
        if (element !== currentElement) {
            toggle(element);
        }
    });
}

const toggle = (element) => {
    const icon = element.querySelector("img[data-js-icon='collapse']");
    const isCurrentExpanded = element.getAttribute('aria-expanded') == "true";
    const shouldExpand = !isCurrentExpanded;
    const toggleBodyElement = document.querySelector(element.getAttribute('data-js-target'));

    element.setAttribute("aria-expanded", shouldExpand.toString());
    shouldExpand
        ? icon.classList.add('rotate-180')
        : icon.classList.remove('rotate-180');
    shouldExpand
        ? toggleBodyElement.classList.remove('collapse')
        : toggleBodyElement.classList.add('collapse');
}

const accordionElements = document.querySelectorAll("#menu-accordion [data-js-toggle='collapse']");

accordionElements.forEach(function (element) {
    element.addEventListener("click", function () {
        collapsePrevExpandedElements(this);
        toggle(this);
    });
});