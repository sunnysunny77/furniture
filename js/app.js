let current;
let count;

const service = document.querySelectorAll(".service");
const aside = document.querySelectorAll(".aside");

setInterval(function() {

  count--;

  if (count === 0) {aside[current].classList.replace("animation","animationout");}
}, 1000);

window.addEventListener("load", function() {

  for (const [x, el] of service.entries()) {

    el.addEventListener("click", function() {

      document.querySelector("#href").scrollIntoView({ block: "center" });

      count = 17;

      service[0].disabled = true;
      service[1].disabled = true;
      service[2].disabled = true;
      service[3].disabled = true;


      if (current === undefined) {

        current = x;

        aside[x].classList.add("animation");
        setTimeout(function() {

          service[0].disabled = false;
          service[1].disabled = false;
          service[2].disabled = false;
          service[3].disabled = false;
          el.focus();
        }, 1000);

        return;
      }

      aside[current].classList.replace("animation","animationout");

      setTimeout(function() {

        aside[x].classList.add("animation");
        aside[x].classList.remove("animationout");
      }, 1000);

      current = x;

      setTimeout(function() {

        service[0].disabled = false;
        service[1].disabled = false;
        service[2].disabled = false;
        service[3].disabled = false;
        el.focus();
      }, 2000);
    });
  }
});
