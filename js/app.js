let current;

window.onload = function () {

    const service = document.querySelectorAll('.service');
    const aside = document.querySelectorAll('.aside');

    service.forEach((service, x) => {

        service.addEventListener("click", function () {


            if (isNaN(current)) {
                current = x;
                aside[x].classList = "animation";
                return
            }

            aside[current].classList = "animationout";
            current = x;
            setTimeout(function () {

                aside[x].classList = "animation";
            }, 1000)
        });
    })
}