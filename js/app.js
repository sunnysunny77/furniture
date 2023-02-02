let current;

window.onload = function () {

    const service = document.querySelectorAll('.service');
    const aside = document.querySelectorAll('.aside');

    service.forEach((el, x) => {


        el.addEventListener("click", function () {

            service[0].disabled = true;
            service[1].disabled = true;
            service[2].disabled = true;
            service[3].disabled = true;
            setTimeout(function () {
                service[0].disabled = false;
                service[1].disabled = false;
                service[2].disabled = false;
                service[3].disabled = false;
            }, 1000)
        
            document.getElementById("href").scrollIntoView({ block: "center" });

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