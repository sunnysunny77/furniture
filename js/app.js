let current;
let count;
let inter_id;

const button_group = document.querySelectorAll(".service");
const action_aside = document.querySelectorAll(".aside");

const disabled = (bool) => {
  for (const index of button_group) {
    index.disabled = bool;
  }
};

const interval = () => {
  count--;

  if (count === 0) {
    clearInterval(inter_id);
    action_aside[current].classList.replace(
      "animation",
      "animationout"
    );
  }
};

window.addEventListener("load", function() {
  for (const [i, index] of button_group.entries()) {
    index.addEventListener("click", function() {
      count = 10;
      clearInterval(inter_id);
      inter_id = setInterval(interval, 1000);
      disabled(true);
      setTimeout(() => {
        disabled(false);
        index.focus();
      }, 3000);

      if (current === undefined) {
        return (action_aside[i].classList.add("animation"), current = i);
      }

      action_aside[current].classList.replace(
        "animation",
        "animationout"
      );

      current = i;

      setTimeout(() => {
        action_aside[i].classList.replace(
          "animationout",
          "animation"
        ) || action_aside[i].classList.add("animation");
      }, 1000);
    });
  }
});
