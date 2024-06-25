let current;
let count;
let nIntervId;

const service = document.querySelectorAll(".service");
const aside = document.querySelectorAll(".aside");

const disabled = (bool) => {
  for (const index of service) {
    index.disabled = bool;
  }
};

const interval = () => {
  count--;

  if (count === 0) {
    clearInterval(nIntervId);  
    aside[current].classList.replace(
      "has-animation",
      "has-animation-out"
    );
  }
};


window.addEventListener("load", function() {

  for (const [x, el] of service.entries()) {

    el.addEventListener("click", function() {

      //document.querySelector("#href").scrollIntoView({ block: "center" });

      count = 10;
      nIntervId = setInterval(interval, 1000);
      disabled(true);

      if (current === undefined) {

        current = x;

        aside[x].classList.add("animation");
        setTimeout(function() {

          disabled(false);
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

        disabled(false);
        el.focus();
      }, 2000);
    });
  }
});
