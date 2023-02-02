let current;
let count;

const service = document.querySelectorAll('.service');
const aside = document.querySelectorAll('.aside');

setInterval(function () {

    count--;

    if (count == 0) aside[current].classList = "animationout";
}, 1000);

window.onload = function () {

    service.forEach((el, x) => {

        el.addEventListener("click", function () {

            document.getElementById("href").scrollIntoView({ block: "center" });

            count = 17;

            service[0].disabled = true;
            service[1].disabled = true;
            service[2].disabled = true;
            service[3].disabled = true;

            if (isNaN(current)) {

                current = x;

                aside[x].classList = "animation";

                setTimeout(function () {

                    service[0].disabled = false;
                    service[1].disabled = false;
                    service[2].disabled = false;
                    service[3].disabled = false;
                    el.focus()
                }, 1000)

                return
            }

            aside[current].classList = "animationout";

            setTimeout(function () {

                aside[x].classList = "animation";
            }, 1000);

            current = x;

            setTimeout(function () {

                service[0].disabled = false;
                service[1].disabled = false;
                service[2].disabled = false;
                service[3].disabled = false;
                el.focus()
            }, 2000);
        });
    })
}